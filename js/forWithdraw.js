
//for deposite:
   document.getElementById("WithdrawButton")
  .addEventListener("click", function () {
    let inputFieldDepositeValue = getInputFieldValueById("withdraw-input"); 
    if(inputFieldDepositeValue){
        let textDepositeValue = getTextValueById("withdrawSum");
        let sumDeposite = inputFieldDepositeValue + textDepositeValue;
        let totalBalanceString = document.getElementById('myTotalBalance').innerText;
        let totalBalanceValue = parseFloat(totalBalanceString);
        let totalUpdatedBalance =  totalBalanceValue - inputFieldDepositeValue ;

        if(totalUpdatedBalance>=0){
          setUpdatedValue("withdrawSum", sumDeposite.toFixed(2));
          setUpdatedValue("myTotalBalance", totalUpdatedBalance.toFixed(2));

        }
        else{
          alert('you dont have sufficient balance.');
        }

        
    }
  
  });


