const determine_risk_tolerance_inputs = (investment_amount, purpose, duration) => {
    // Determine risk level based on duration and purpose
    if (duration < 5) {
        if (purpose === "speculate") {
            return "Aggressive";
        } else if (["education", "purchasing a home"].includes(purpose)) {
            return "Conservative";
        } else {
            return "Moderate";
        }
    } else if (duration >= 20 && purpose === "retirement") {
        return "Aggressive";
    } else if (purpose === "education") {
        return "Conservative";
    } else if (purpose === "purchasing a home" && duration < 10) {
        return "Moderate Conservative";
    } else if (purpose === "looking to get started") {
        return duration >= 10 ? "Moderate" : "Conservative";
    } else {
        return "Moderate";
    }
}

module.exports = determine_risk_tolerance_inputs;
// // Example usage:
// const investment_amount = 10000;
// const purpose = "speculate";
// const duration = 4;

// const riskLevel = determine_risk_tolerance_inputs(investment_amount, purpose, duration);
// console.log("Risk Level:", riskLevel);
