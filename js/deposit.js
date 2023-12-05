document.getElementById('btn-deposit').addEventListener('click', function(){

    
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmount = depositField.value;
    

    const depositTotalField = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalField.innerText;
    
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(NewDepositAmount);
    depositTotalField.innerText = currentDepositTotal;

    // update total ballance

    const TotalBallanceAmount = document.getElementById('ballance-total');
    const PreviousTotalAmount = TotalBallanceAmount.innerText;

    const currentTotal = parseFloat(PreviousTotalAmount) + parseFloat(NewDepositAmount);
    TotalBallanceAmount.innerText = currentTotal;


    depositField.value = '';
})