from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import datetime as dt
import yfinance as yf
from flask_cors import CORS

mc_sims = 10000
annual_inflation_rate = 0.02
endDate = dt.datetime(2022, 12, 31)
startDate= dt.datetime(1972, 1, 1)

app = Flask(__name__)
CORS(app)

# Function to get stock data
def get_data(stocks, use_historical=True):
    stockData = {}
    for stock in stocks:
        try:
            data = yf.download(stock, start=startDate, end=endDate)
            stockData[stock] = data['Close']
        except Exception as e:
            print(f"Error fetching data for {stock}: {e}")
            continue

    combinedData = pd.DataFrame(stockData)
    print(f"combinedData {combinedData}")
    returns = combinedData.pct_change()
    print(f"returns {returns}")
    yearlyReturns = returns.resample('Y').apply(lambda x: ((1 + x).prod()) - 1)
    print(f"yearlyReturns {yearlyReturns}")
    if use_historical:
        meanReturns = yearlyReturns.mean()
        print(f"meanReturns {meanReturns}")
    else:
        default_annual_growth = 0.07
        meanReturns = np.full(len(stocks), default_annual_growth)
    meanReturns -= annual_inflation_rate
    covMatrix = returns.cov()

    return meanReturns, covMatrix

def suggest_portfolio(risk_level, chosen_stocks, meanReturns):
    print("Risk Level:", risk_level, "Type:", type(risk_level))
    num_stocks = len(chosen_stocks)

    if num_stocks == 1:
        # Handle the case when there is only one stock in the portfolio
        return np.array([1.0])
        
    sorted_indexes = meanReturns.argsort()[::-1]
    print("Sorted Indexes:", sorted_indexes)
    print("Sorted Stocks and Returns:")
    for index in sorted_indexes:
        print(f"Stock: {chosen_stocks[index]}, Return: {meanReturns[index]}")

    if risk_level == "Aggressive":
        # Higher allocation to stocks with highest returns
        top_indexes = sorted_indexes[:int(0.5 * num_stocks)]
        print("Top Indexes for Aggressive:", top_indexes)
        #
        weights = [0.8 / len(top_indexes) if i in top_indexes else 0.2 / (num_stocks - len(top_indexes)) for i in range(num_stocks)]
    elif risk_level == "Moderate Aggressive":
        # Balanced but slightly aggressive
        top_indexes = sorted_indexes[:int(0.7 * num_stocks)]
        print("Top Indexes for Moderate Aggressive:", top_indexes)
        #
        weights = [0.6 / len(top_indexes) if i in top_indexes else 0.4 / (num_stocks - len(top_indexes)) for i in range(num_stocks)]
    elif risk_level == "Moderate":
        # Evenly distributed weights
        weights = [1 / num_stocks] * num_stocks
        print("No specific top or bottom indexes for Moderate")
        #
    elif risk_level == "Moderate Conservative":
        # More conservative, lower allocation to higher return stocks
        bottom_indexes = sorted_indexes[int(0.6 * num_stocks):]
        print("Bottom Indexes for Moderate Conservative:", bottom_indexes)
        #
        weights = [0.4 / len(bottom_indexes) if i in bottom_indexes else 0.6 / (num_stocks - len(bottom_indexes)) for i in range(num_stocks)]
    else:  # "Conservative"
        # Highest allocation to less volatile stocks
        bottom_indexes = sorted_indexes[int(0.8 * num_stocks):]
        print("Bottom Indexes for Conservative:", bottom_indexes)
        #
        weights = [0.8 / len(bottom_indexes) if i in bottom_indexes else 0.2 / (num_stocks - len(bottom_indexes)) for i in range(num_stocks)]

    # Normalize weights to ensure they sum to 1
    weights = np.array(weights) / np.sum(weights)
    return weights ###



# DETERMINE RISK TOLERANCE FROM INPUTS
def determine_risk_tolerance_inputs(investment_amount, purpose, duration):
    """
    Adjusts the risk level based on investment amount, purpose, and duration.
    Returns a risk profile category.
    """

    # Determine risk level based on duration and purpose
    if duration < 5:
        if purpose == "Looking to Speculate":
            return "Aggressive"
        elif purpose in ["Education Planning", "Purchasing a Home"]:
            return "Conservative"
        else:
            return "Moderate"
    elif duration >= 20 and purpose == "Retirement Planning":
        return "Aggressive"
    elif purpose == "Education Planning":
        return "Conservative"
    elif purpose == "Purchasing a Home" and duration < 10:
        return "Moderate Conservative"
    elif purpose == "Looking to Get Started":
        return "Moderate" if duration >= 10 else "Conservative"
    else:
        return "Moderate"


def monte_carlo_simulation(mean_returns, cov_matrix, initial_weights, T, initial_portfolio_value, monthly_investment, mc_sims):
    def make_matrix_positive_definite(cov_matrix):
        min_eigenvalue = np.min(np.real(np.linalg.eigvals(cov_matrix)))
        if min_eigenvalue < 0:
            offset = -min_eigenvalue
            cov_matrix += offset * np.eye(*cov_matrix.shape)
        return cov_matrix

    mean_M = np.full(shape=(T, len(initial_weights)), fill_value=mean_returns)
    mean_M = mean_M.T
    portfolio_sims = np.full(shape=(T, mc_sims), fill_value=0.0)

    cov_matrix = make_matrix_positive_definite(cov_matrix)
    L = np.linalg.cholesky(cov_matrix)

    for m in range(0, mc_sims):
        Z = np.random.normal(size=(T, len(initial_weights)))
        yearly_returns = mean_M + np.inner(L, Z)

        for t in range(T):
            # Use the initial weights for all years (yearly rebalancing)
            current_weights = initial_weights

            if t == 0:
                # For the first year, just adjust with the initial investment
                portfolio_sims[t, m] = (np.inner(current_weights, yearly_returns[:, t]) + 1) * initial_portfolio_value + 12 * monthly_investment
            else:
                # For subsequent years, adjust with the portfolio value at the end of the previous year and add monthly investments
                portfolio_sims[t, m] = (np.inner(current_weights, yearly_returns[:, t]) + 1) * portfolio_sims[t - 1, m] + 12 * monthly_investment

    return portfolio_sims

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/monte_carlo', methods=['POST'])
def run_monte_carlo():
    try:
        data = request.get_json()
        # mean_returns = data['mean_returns']
        # cov_matrix = data['cov_matrix']
        choosen_stocks = data['choosen_stocks']
        mean_returns, cov_matrix =  get_data(choosen_stocks)
        T = data['T']
        initial_portfolio_value = data['initial_portfolio_value']
        monthly_investment = data['monthly_investment']
        purpose = data['purpose']
        mc_sims = data['mc_sims']
        risk_profile_questionnaire = data['risk_profile']
        risk_profile_inputs = determine_risk_tolerance_inputs(initial_portfolio_value,purpose,T)
        weights_questionnaire = suggest_portfolio(risk_profile_questionnaire, choosen_stocks, mean_returns)
        results = monte_carlo_simulation(mean_returns, cov_matrix, weights_questionnaire, T, initial_portfolio_value, monthly_investment, mc_sims)
        final_portfolio_values1 = results[-1, :]  # final portfolio values
        final_median1 = np.median(final_portfolio_values1)  

        return jsonify({'success': True, 'results': results.tolist(),'median':final_median1})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=False, port=6789)
