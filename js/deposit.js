document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldById('deposit-field');

    if(isNaN(newDepositAmount)){
        alert('Please Enter a Valid Number!!!');
        return;
    }

    const previousDepositAmount = getTotalAmountById('deposit-total');

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    setTotalAmountById('deposit-total', newDepositTotal);

    const previousBalanceAmount = getTotalAmountById('balance-total');
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    setTotalAmountById('balance-total', newBalanceTotal);

    


})