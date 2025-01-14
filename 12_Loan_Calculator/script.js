
function calculateLoan(){
    const loanAmountValue = document.getElementById("loan-amount").value;
    // console.log(loanAmountValue); 
    const interestRateValue = document.getElementById("interest-rate").value;
    // console.log(interestRateValue);
    const monthsToPayValue = document.getElementById("months-to-pay").value;
    // console.log(monthsToPayValue);
    interest = (loanAmountValue * (interestRateValue * 0.01))/monthsToPayValue;
    
    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2); 
    
    document.getElementById("payment").innerHTML = `Monthly Payment : ${monthlyPayment}`;
}
