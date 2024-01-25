const yahooFinance = require('yahoo-finance');

const get_data = async (stocks, start, end, use_historical = true)=> {
    let stockData = {};

    for (const stock of stocks) {
        try {
            let data = await yahooFinance.historical({
                symbol: stock,
                from: start,
                to: end,
            });
            data = data.reverse();
            console.log("data",data)
            stockData[stock] = data.map((item) => ({
                date: item.date,
                close: item.close,
            }));
        } catch (e) {
            console.error(`Error fetching data for ${stock}: ${e.message}`);
            continue;
        }
    }
    let combinedData = {};
    for (const stock in stockData) {
        combinedData[stock] = stockData[stock].map((item) => item.close);
    }
    console.log("combinedData",combinedData)

    let returns = Object.fromEntries(
        Object.entries(combinedData).map(([stock, prices]) => [
            stock,
            prices.map((price, index) => (index === 0 ? 0 : (price / prices[index - 1]) - 1)),
        ])
    );
    console.log("returns",returns)

    let yearlyReturns = Object.fromEntries(
        Object.entries(returns).map(([stock, prices]) => [
            stock,
            prices.reduce((acc, returnVal) => (1 + returnVal) * acc, 1) - 1,
        ])
    );
    console.log("yearlyReturns",yearlyReturns)

    // let meanReturns = use_historical
    //     ? Object.values(yearlyReturns).reduce((acc, val) => acc + val, 0) / stocks.length
    //     : Array(stocks.length).fill(0.07);
    let meanReturns = Object.values(yearlyReturns)
    console.log("meanReturns",meanReturns)
    let inflationRate = 0.02; // Set your desired inflation rate here
    if(typeof meanReturns == "object")
    {
        meanReturns = meanReturns.map((v)=>{ return v-inflationRate})
    }
    else{
        meanReturns -= inflationRate;
    }

    let covMatrix = calculateCovarianceMatrix(returns);

    return { meanReturns, covMatrix };
}
module.exports = get_data

function calculateCovarianceMatrix(returns) {
    const stocks = Object.keys(returns);
    const covMatrix = Array.from({ length: stocks.length }, () => Array(stocks.length).fill(0));

    for (let i = 0; i < stocks.length; i++) {
        for (let j = 0; j < stocks.length; j++) {
            const stock1 = stocks[i];
            const stock2 = stocks[j];

            const covariance = calculateCovariance(returns[stock1], returns[stock2]);
            covMatrix[i][j] = covariance;
        }
    }

    return covMatrix;
}

function calculateCovariance(returns1, returns2) {
    const n = Math.min(returns1.length, returns2.length);
    const meanReturns1 = returns1.reduce((acc, val) => acc + val, 0) / n;
    const meanReturns2 = returns2.reduce((acc, val) => acc + val, 0) / n;

    let covariance = 0;
    for (let i = 0; i < n; i++) {
        covariance += (returns1[i] - meanReturns1) * (returns2[i] - meanReturns2);
    }

    covariance /= n;

    return covariance;
}
function suggest_portfolio(risk_level, chosen_stocks, meanReturns) {
    // console.log("Risk Level:", risk_level, "Type:", typeof risk_level);
    const num_stocks = chosen_stocks.length;
    const sorted_indexes = meanReturns.map((_, index) => index)
                                       .sort((a, b) => meanReturns[b] - meanReturns[a]);
    // console.log("Sorted Indexes:", sorted_indexes);
    // console.log("Sorted Stocks and Returns:");
    sorted_indexes.forEach(index => {
        // console.log(`Stock: ${chosen_stocks[index]}, Return: ${meanReturns[index]}`);
    });

    let weights;

    if (risk_level === "Aggressive") {
        // Higher allocation to stocks with highest returns
        const top_indexes = sorted_indexes.slice(0, Math.floor(0.5 * num_stocks));
        // console.log("Top Indexes for Aggressive:", top_indexes);
        weights = Array.from({ length: num_stocks }, (_, i) =>
            top_indexes.includes(i) ? 0.8 / top_indexes.length : 0.2 / (num_stocks - top_indexes.length)
        );
    } else if (risk_level === "Moderate Aggressive") {
        // Balanced but slightly aggressive
        const top_indexes = sorted_indexes.slice(0, Math.floor(0.7 * num_stocks));
        // console.log("Top Indexes for Moderate Aggressive:", top_indexes);
        weights = Array.from({ length: num_stocks }, (_, i) =>
            top_indexes.includes(i) ? 0.6 / top_indexes.length : 0.4 / (num_stocks - top_indexes.length)
        );
    } else if (risk_level === "Moderate") {
        // Evenly distributed weights
        // console.log("No specific top or bottom indexes for Moderate");
        weights = Array.from({ length: num_stocks }, () => 1 / num_stocks);
    } else if (risk_level === "Moderate Conservative") {
        // More conservative, lower allocation to higher return stocks
        const bottom_indexes = sorted_indexes.slice(Math.floor(0.6 * num_stocks));
        // console.log("Bottom Indexes for Moderate Conservative:", bottom_indexes);
        weights = Array.from({ length: num_stocks }, (_, i) =>
            bottom_indexes.includes(i) ? 0.4 / bottom_indexes.length : 0.6 / (num_stocks - bottom_indexes.length)
        );
    } else {
        // "Conservative"
        // Highest allocation to less volatile stocks
        const bottom_indexes = sorted_indexes.slice(Math.floor(0.8 * num_stocks));
        // console.log("Bottom Indexes for Conservative:", bottom_indexes);
        weights = Array.from({ length: num_stocks }, (_, i) =>
            bottom_indexes.includes(i) ? 0.8 / bottom_indexes.length : 0.2 / (num_stocks - bottom_indexes.length)
        );
    }

    // Normalize weights to ensure they sum to 1
    const sumWeights = weights.reduce((acc, weight) => acc + weight, 0);
    weights = weights.map(weight => weight / sumWeights);

    return weights;
}

// Example usage:
// const chosen_stocks = ['AAPL', 'GOOGL', 'MSFT'];
const chosen_stocks = ['AAPL','GOOGL'];
const startDate = '2023-11-02';
const endDate = '2023-11-07';

get_data(chosen_stocks, startDate, endDate)
    .then(({ meanReturns, covMatrix }) => {
        console.log('Mean Returns:', meanReturns);
        console.log('Covariance Matrix:', covMatrix);
        //
        const risk_levels = ["Aggressive", "Moderate Aggressive", "Moderate", "Moderate Conservative", "Conservative"];

        // Debugging: Print portfolio weights for each risk level
        risk_levels.forEach(risk_level => {
            const weights = suggest_portfolio(risk_level, chosen_stocks, meanReturns);
            console.log(`Risk Level: ${risk_level}, Weights: ${weights}`);
        });
    })
    .catch((error) => console.error('Error:', error));
