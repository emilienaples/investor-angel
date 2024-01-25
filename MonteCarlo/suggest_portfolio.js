const suggest_portfolio = (risk_level, chosen_stocks, meanReturns)=> {
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

module.exports = suggest_portfolio;