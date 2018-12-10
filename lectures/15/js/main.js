var savingsAccount = {
    title: 'Muhammad Ali',
    balance: 962155,
    currency: 'PKRS',
    IBAN: 'PKN1234654321',
    deposit: function addMoney(e,amount) {
        if(e.keyCode === 13) {
            if (!isNaN(amount) && parseInt(amount) > 0) {
                savingsAccount.balance += parseInt(amount);
                document.getElementById('deposit').value = '';
                loadAccount();
                savingsAccount.printTransactions('Credit', amount);
            }else {
                document.getElementById("deposit-msg").style.color = "red";
                document.getElementById("deposit-msg").innerText = "Enter Valid Amount";
            }
        }
    },
    withdraw: function removeMoney(e,amount) {
        if(e.keyCode === 13) {
            if (!isNaN(amount) && parseInt(amount) > 0) {
                var verifyBalance = savingsAccount.balance - parseInt(amount);
                if(verifyBalance >= 0) {
                    savingsAccount.balance -= parseInt(amount);
                    document.getElementById('withdraw').value = '';
                    loadAccount();
                    savingsAccount.printTransactions('Debit', amount);
                }
                else {
                    document.getElementById("withdraw-msg").style.color = "orange";
                    document.getElementById("withdraw-msg").innerText = "Don't have sufficient amount in account ";
                }
            }else {
                document.getElementById("withdraw-msg").style.color = "red";
                document.getElementById("withdraw-msg").innerText = "Enter Valid Amount";
            }
        }
    },
    printTransactions: function print(tType, amount){
        var table = document.getElementById("transaction-table");
        var row = document.createElement("tr");
        var dateTd = document.createElement("td");
        var d = new Date();
        d = month[d.getMonth()] + ' '+d.getDate() +', '+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        dateTd.innerHTML = d;
        var typeTd = document.createElement("td");
        typeTd.innerHTML = tType;
        var amountTd = document.createElement("td");
        amountTd.innerHTML = amount;
        row.appendChild(dateTd);
        row.appendChild(typeTd);
        row.appendChild(amountTd);
        table.appendChild(row);
    }
};

loadAccount();
function loadAccount() {
    var title = document.getElementById('title');
    var balance = document.getElementById('balance');
    var currency = document.getElementById('currency');
    var IBAN = document.getElementById('IBAN');
    title.innerHTML = savingsAccount.title;
    balance.innerHTML = savingsAccount.balance;
    currency.innerHTML = savingsAccount.currency;
    IBAN.innerHTML = savingsAccount.IBAN;
}

var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";