const { Matrix, CholeskyDecomposition } = require('ml-matrix');

function monte_carlo_simulation(meanReturns, covMatrix, initial_weights, T, initialPortfolioValue, monthly_investment, mc_sims) {
    function make_matrix_positive_definite(covMatrix) {
        const minEigenvalue = Matrix.eigenvalueDecomposition(covMatrix).realEigenvalues.min();
        if (minEigenvalue < 0) {
            const offset = -minEigenvalue;
            covMatrix = Matrix.add(covMatrix, Matrix.eye(covMatrix.rows, covMatrix.columns).mul(offset));
        }
        return covMatrix;
    }

    const meanM = Matrix.zeros(T, initial_weights.length).valueOf().map(() => meanReturns);
    const portfolio_sims = new Matrix(T, mc_sims).fill(0.0);

    covMatrix = make_matrix_positive_definite(covMatrix);
    const choleskyDecomposition = new CholeskyDecomposition(covMatrix);
    const L = choleskyDecomposition.getL();

    for (let m = 0; m < mc_sims; m++) {
        const Z = Matrix.random(T, initial_weights.length);
        const yearlyReturns = meanM.add(Matrix.mul(Z, L));

        for (let t = 0; t < T; t++) {
            // Use the initial weights for all years (yearly rebalancing)
            const current_weights = [...initial_weights];

            if (t === 0) {
                // For the first year, just adjust with the initial investment
                portfolio_sims.set(t, m, (Matrix.dot(current_weights, yearlyReturns.getRow(t)) + 1) * initialPortfolioValue + 12 * monthly_investment);
            } else {
                // For subsequent years, adjust with the portfolio value at the end of the previous year and add monthly investments
                portfolio_sims.set(t, m, (Matrix.dot(current_weights, yearlyReturns.getRow(t)) + 1) * portfolio_sims.get(t - 1, m) + 12 * monthly_investment);
            }
        }
    }

    return portfolio_sims;
}

// Example usage:
const meanReturns = [0.05, 0.06, 0.04];
const covMatrix = new Matrix([[0.0004, 0.0002, 0.0001], [0.0002, 0.0003, 0.00015], [0.0001, 0.00015, 0.00025]]);
const initial_weights = [0.4, 0.4, 0.2];
const T = 10;
const initialPortfolioValue = 100000;
const monthly_investment = 1000;
const mc_sims = 100;

const portfolio_sims = monte_carlo_simulation(meanReturns, covMatrix, initial_weights, T, initialPortfolioValue, monthly_investment, mc_sims);
console.log("Monte Carlo Simulation Results:", portfolio_sims);
