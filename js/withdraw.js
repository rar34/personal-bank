document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmountField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawAmountField.value;

    const withdrawPreviousAmountText = document.getElementById('withdraw-total');
    const withdrawPreviousAmount = withdrawPreviousAmountText.innerText;

    const currentWithdrawAmount = parseFloat(withdrawPreviousAmount) + parseFloat(withdrawAmount);
    withdrawPreviousAmountText.innerText = currentWithdrawAmount;


    // update total ballance
    const TotalBallanceAmounts = document.getElementById('ballance-total');
    const PreviousTotalAmounts = TotalBallanceAmounts.innerText;

    const currentTotals = parseFloat(PreviousTotalAmounts) - parseFloat(withdrawAmount);
    TotalBallanceAmounts.innerText = currentTotals;

    withdrawAmountField.value = '';
})