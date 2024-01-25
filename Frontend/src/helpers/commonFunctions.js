import Swal from 'sweetalert2'

const generate_session_id = () =>{
    let date = new Date().getTime();
    let random = Math.floor(Math.random()*Math.random()*99999999);
    return `${date}${random}`;
}
/*
{"ccDebt":0,"marginDebt":10,"autoDebt":20,"studentDebt":0,"mortgageDebt":20,"otherDebt":0}
*/

const calculateRiskProfile = (risk_questionnaire,duration,debt) =>{

    let total_debt = (parseInt(debt?.autoDebt ?? 0)*1000) + (parseInt(debt?.studentDebt ?? 0)*1000) + (parseInt(debt?.mortgageDebt ?? 0)*1000) + (parseInt(debt?.otherDebt ?? 0)*1000)
    
    if(typeof total_debt == "number" && total_debt > 0)
    {
        if(total_debt > 20000 && duration < 15 )
        {   // risk downward
            switch(risk_questionnaire){
                case "Conservative":
                    return "Conservative";
                case "Moderate Conservative":
                    return "Conservative";
                case "Moderate":
                    return "Moderate Conservative";
                case "Moderate Aggressive":
                    return "Moderate";
                case "Aggressive":
                    return "Moderate Aggressive";
            }
        }
        else if(total_debt < 20000 && duration > 15){
            // risk upward
            switch(risk_questionnaire){
                case "Conservative":
                    return "Moderate Conservative";
                case "Moderate Conservative":
                    return "Moderate";
                case "Moderate":
                    return "Moderate Aggressive";
                case "Moderate Aggressive":
                    return "Aggressive";
                case "Aggressive":
                    return "Aggressive";
            }
        }
    }
    return risk_questionnaire;
}
const calculateInitialInvestment = (amount_,debt) =>{
    let amount = parseFloat(amount_);
    if(isNaN(amount) || amount_ < 0 || amount_ == "")
    {
        return {amount:0};
    }
    let deductable_amount = (parseInt(debt?.ccDebt ?? 0)*1000) + (parseInt(debt?.marginDebt ?? 0)*1000)

    if(typeof deductable_amount == "number" && deductable_amount > 0)
    {
        if(amount - deductable_amount > 0)
        {
            return {amount:(amount - deductable_amount)}
        }
        // Swal.fire({
        //     title: 'Suggestion!',
        //     text: 'We recommend paying off all of your debts first',
        //     icon: 'warn',
        //     confirmButtonText: 'Show Me Results Anyway'
        // })
        return {amount,underDebt:true};
    }
    return {amount}
}

const update_refresh_count = () =>{
    let refreshCount = localStorage.getItem('refreshCount');
    if(refreshCount)
    {
        localStorage.setItem('refreshCount',parseInt(refreshCount)+1)
    }
    else{
        localStorage.setItem('refreshCount',1)
    }
}
module.exports = {
    generate_session_id,
    update_refresh_count,
    calculateInitialInvestment,
    calculateRiskProfile
}