var info={
    name:"Muhammad Ali",
    balance:25000,
    currency:"PKR",
    iban:"1234EF"
};

var type;
var transaction_amount;

displaying();

function displaying(){
    document.getElementById("title").innerText=info.name;
    document.getElementById("balance").innerText=info.balance;
    document.getElementById("currency").innerText=info.currency;
    document.getElementById("IBAN").innerText=info.iban;
}

function add_amount(event,value){
    if(event.keyCode===13)
    {
        var val=parseInt(value);
        if(!isNaN(value)&&val>0)
        {
            document.getElementById("deposit-msg").innerText='';
            info.balance+=val;
            transaction_amount=val;
            type="Credit";
            displaying_transactions();
            displaying();
        }
        else
        {
            document.getElementById("deposit-msg").style.color='red';
            document.getElementById("deposit-msg").innerText='Enter valid amount';
        }
        document.getElementById("deposit").value='';
    }
}

function delete_amount(event,value){
    if(event.keyCode===13)
    {
        var val=parseInt(value);
        if(!isNaN(value)&&val>0)
        {
            document.getElementById("withdraw-msg").innerText='';
            if(val>info.balance)
            {
                document.getElementById("withdraw-msg").style.color='yellow';
                document.getElementById("withdraw-msg").innerText="Don't have sufficient amount in account";
            }
            else
            {
                info.balance-=val;
                type="Debit";
                transaction_amount=val;
                displaying_transactions();
                displaying();
            }
        }
        else
        {
            document.getElementById("withdraw-msg").style.color='red';
            document.getElementById("withdraw-msg").innerText='Enter valid amount';
        }
        document.getElementById("withdraw").value='';
    }
}

var month=[];
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";

function displaying_transactions(){
    var table=document.getElementById("transaction-table");
    var row=document.createElement("tr");
    var d=document.createElement("td");
    var date=new Date();
    date=month[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear()+':'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    var t=document.createElement('td');
    var typpe=type;
    var a=document.createElement('td');
    var amount=transaction_amount;
    d.innerHTML=date;
    t.innerHTML=typpe;
    a.innerHTML=amount;
    row.appendChild(d);
    row.appendChild(t);
    row.appendChild(a);
    table.appendChild(row);
}