const yahooFinance = require('yahoo-finance');

const get_data = require("./get_stock_data.js");
const suggest_portfolio = require('./suggest_portfolio.js')
const determine_risk_tolerance_inputs = require('./determine_risk_tolerance_input.js')

// Example usage:
// const chosen_stocks = ['AAPL', 'GOOGL', 'MSFT'];
// all the user inputs
const chosen_stocks = ['AAPL','GOOGL'];
/* purpose enum [
    "buy a home", "speculate", "retirement", "education", "get started"
]
monthly_contribution optional

get_user_debt = student_debt + auto_loan_debt + credit_card_debt + margin_debt

risk_tolerance_questionnaire = total_points from all the risk tolerance
enum [
    "Conservative",
    "Moderate Conservative",
    "Moderate",
    "Moderate Aggressive",
    "Aggressive"
]
*/

const user_input = {
    "investment_amount":100000,
    "monthly_contribution":1000,
    "purpose":"retirement",
    "duration":10
}
const debt = 3000
const risk_profile_questionnaire = "Aggressive"
const startDate = '1972-01-01';
const endDate = '2022-12-31';

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

        // risk_profile_questionnaire
        console.log(`Based on your answers, your risk profile is: ${risk_profile_questionnaire}`)

        // Determine risk profile using the inputs (3 questions)
        const risk_profile_inputs = determine_risk_tolerance_inputs(user_input.investment_amount,user_input.purpose,user_input.duration)

        console.log(`Based on your answers to the 3 questions at the beginning (age, investment duration, and purspose), your risk profile is: ${risk_profile_inputs}`)

        if(risk_profile_inputs != risk_profile_questionnaire)
        {
            console.log("There seems to be a mismatch between your initial inputs and your questionnaire results.")

            // Portfolio weights for inputs-based risk profile

            const weight_inputs = suggest_portfolio(risk_profile_inputs,chosen_stocks,meanReturns)

            // Show Monte Carlo scenario for inputs-based risk profile

            console.log("Monte Carlo scenario for your initial inputs-based risk profile:")

            


        }
        else{

        }

})
.catch((error) => console.error('Error:', error));
