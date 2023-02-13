document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const peviousDepositTotlaString = depositTotalElement.innerText;
    const peviousDepositTotlaAmmount = parseFloat(peviousDepositTotlaString);
    
    const newDepositTotal = peviousDepositTotlaAmmount + newDepositAmmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalAmmountString = balanceTotalElement.innerText;
    const previousBalanceTotalAmmount = parseFloat(previousBalanceTotalAmmountString);
    
    const newBalanceTotal = previousBalanceTotalAmmount + newDepositAmmount;
    balanceTotalElement.innerText = newBalanceTotal;
});