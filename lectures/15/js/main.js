var info={
    name:"Muhammad Ali",
    balance:10000,
    currency:"PKR",
    iban:"PKR12345C"
};

display();
deposit1();
withdraw1();
function display(){
    var d = document.getElementById("title");
    d.innerHTML = info.name;

    d = document.getElementById("balance");
    d.innerHTML = info.balance;

    d = document.getElementById("currency");
    d.innerHTML = info.currency;

    d = document.getElementById("IBAN");
    d.innerHTML = info.iban;
}

function deposit1(e,v) {
    var d = document.getElementById("deposit-msg");
    if(e.key==="Enter"){
        var val;
        if((v>='A' && v<='Z')||(v>='a' && v<='z')) {
            d.innerHTML = "invalid";
        }
        else
        {
            val=parseInt(v);
            info.balance+=val;
            d.innerHTML='';
        }
    }
    display();
}

function withdraw1(e,v) {
    var d = document.getElementById("deposit-msg");
    if(e.key==="Enter"){
        var val;
        if((v>='A' && v<='Z')||(v>='a' && v<='z')) {
            d.innerHTML = "invalid";
        }
        else
        {
            val=parseInt(v);
            info.balance-=val;
            d.innerHTML='';
        }
    }
    display();
}