document.getElementById('withdrow-btn').addEventListener('click', function () {
    
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmmountTotalString = withdrowField.value;
    const newWithdrowAmmountTotal = parseFloat(newWithdrowAmmountTotalString);
    
    withdrowField.value = '';

    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousBalanceTotalAmmount = parseFloat(previousWithdrowTotalString);

    const newWithdrowTotal = previousBalanceTotalAmmount + newWithdrowAmmountTotal;
    withdrowTotalElement.innerText = newWithdrowTotal;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrowAmmountTotal;
    balanceElement.innerText = newBalanceTotal;
    
})