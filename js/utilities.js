function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const newInputAmountString = inputField.value;
    const newInputAmount = parseFloat(newInputAmountString);
    inputField.value = '';
    return newInputAmount;   
}

function getTotalAmountById(total){
    const previousAmountField = document.getElementById(total);
    const previousAmountString = previousAmountField.innerText;
    const previousAmount = parseFloat(previousAmountString);
    return previousAmount;
}

function setTotalAmountById(total, newValue){
    const previousAmountField = document.getElementById(total);
    previousAmountField.innerText = newValue;
}


