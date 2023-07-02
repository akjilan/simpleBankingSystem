//for deposite:
document
  .getElementById("depositeButton")
  .addEventListener("click", function () {
    let inputFieldDepositeValue = getInputFieldValueById("deposite-input"); 
    if(inputFieldDepositeValue){
        let textDepositeValue = getTextValueById("depositeSum");
        let sumDeposite = inputFieldDepositeValue + textDepositeValue;
        setUpdatedValue("depositeSum", sumDeposite.toFixed(2));
        let totalBalanceString = document.getElementById('myTotalBalance').innerText;
        let totalBalanceValue = parseFloat(totalBalanceString);
        let totalUpdatedBalance = inputFieldDepositeValue + totalBalanceValue;
        setUpdatedValue("myTotalBalance", totalUpdatedBalance.toFixed(2));
    }
  
  });

