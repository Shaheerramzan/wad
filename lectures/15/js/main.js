var num=0;
var Person = {
        Name:"Shaheer",
        Balance:2500,
        BalanceType:"PKRS",
        AccountNumber:123456,
    onDepositEnter: function ( e, val) {
        document.getElementById("deposit-msg").innerHTML="";
        if (e.keyCode===13){
            if(document.getElementById("deposit").value==="")
            {
                document.getElementById("deposit-msg").innerHTML="enter a valid amount";
            }
            if(isNaN(document.getElementById("deposit").value))
            {
                document.getElementById("deposit-msg").innerHTML="enter a valid integer";
                document.getElementById("deposit").value="";
            }
            else{
                num=parseInt(val);
                Person.Balance+=num;
                document.getElementById("balance").innerHTML="";
                document.getElementById("deposit").value="";
                document.getElementById("balance").innerHTML=Person.Balance;
                fun("deposit", num);
            }
        }

    },
    onWithdrawEnter: function ( e, val) {
        document.getElementById("withdraw-msg").innerHTML="";
        if (e.keyCode===13){
            if(document.getElementById("withdraw").value==="")
            {
                document.getElementById("withdraw-msg").innerHTML="enter a valid amount";
            }
            if(isNaN(document.getElementById("withdraw").value))
            {
                document.getElementById("withdraw-msg").innerHTML="enter a valid integer";
                document.getElementById("withdraw").value="";
            }
            else{
                num=parseInt(val);
                if(num<Person.Balance) {
                    Person.Balance -= num;
                    document.getElementById("balance").innerHTML = "";
                    document.getElementById("withdraw").value = "";
                    document.getElementById("balance").innerHTML = Person.Balance;
                    fun("withdraw", num);
                }
                else
                {
                    document.getElementById("withdraw").value="";
                                                                        
                    document.getElementById("withdraw-msg").innerHTML="enter a less valid amount";
                }
            }
        }

    },
    };

function Display()
{
    document.getElementById("title").innerHTML=Person.Name;
    document.getElementById("balance").innerHTML=Person.Balance;
    document.getElementById("currency").innerHTML=Person.BalanceType;
    document.getElementById("IBAN").innerHTML=Person.AccountNumber;
}
var f=document.getElementById("transaction-table");
function fun(t,val)
{
    f.innerHTML+="<tr><td>"+new Date()+"</td><td>"+t+"</td><td>"+val+"</td></tr>"
}