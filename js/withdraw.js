document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');

    if(isNaN(newWithdrawAmount)){
        alert('Please Enter a Valid Number!!!');
        return;
    }

    const previousWithdrawTotal = getTotalAmountById('withdraw-total');
    if(newWithdrawAmount > previousWithdrawTotal){
        alert('Your Account do not have ENOUGH money!!');
        return;
    }

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTotalAmountById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTotalAmountById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTotalAmountById('balance-total', newBalanceTotal);
    
})