// deposite part:

document
  .getElementById("depositeButton")
  .addEventListener("click", function () {
    if (document.getElementById("deposite-input").value == "") {
      alert("you gave empty input. Give a number.");
    } else {
      let inputField = document.getElementById("deposite-input");
      let prevDepositeTotal = document.getElementById("depositeSum");
      prevDepositeTotal.innerText =
        (parseFloat(prevDepositeTotal.innerText, 10) +
        parseFloat(inputField.value, 10)).toFixed(2);
      //updating total balance
      let myTotalBalance = document.getElementById("myTotalBalance");
      myTotalBalance.innerText =
        (parseFloat(myTotalBalance.innerText) + parseFloat(inputField.value)).toFixed(2);
      //emptying the input field:
      inputField.value = "";
    }
  });

//withdraw part

document
  .getElementById("WithdrawButton")
  .addEventListener("click", function () {
    if (document.getElementById("withdraw-input").value == "") {
      alert("you gave empty input. Give a number.");
    } else {
      let inputField = document.getElementById("withdraw-input");
      let prevWithdrawTotal = document.getElementById("WithdrawSum");     
      let myTotalBalance = document.getElementById("myTotalBalance");  
      let myTotalBalanceUpdated =parseFloat(myTotalBalance.innerText) - parseFloat(inputField.value);
       //updating total balance
      if (myTotalBalanceUpdated >= 0) {
        myTotalBalance.innerText =
        myTotalBalanceUpdated.toFixed(2);
          //updating deposite balance:
        prevWithdrawTotal.innerText =
        (parseFloat(prevWithdrawTotal.innerText) +
        parseFloat(inputField.value)).toFixed(2);
      } else {
        alert("Sorry , you dont have sufficient balance.");
      }
      //emptying the input field:
      inputField.value = "";
    }
  });
