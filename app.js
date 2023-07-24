let bill=document.getElementById("bill");
let tipP=document.getElementById("tipP");
let tipAmount=document.getElementById('tipA')
let tAmount=document.getElementById('tAmount')
let numberP=document.getElementById('numberP')
let amountE=document.getElementById('amountE');

document.querySelector('.calculate-tip').addEventListener('click',()=>{
        tipAmount.textContent=Number(tipP.value/100*bill.value);
        console.log(typeof(tipAmount.innerHTML))
})

document.querySelector('.calculate-amount').addEventListener('click',()=>{
    tipAmount.innerHTML=tipP.value/100*bill.value;
    tAmount.innerHTML=Number(bill.value)+Number(tipAmount.innerHTML);
})

document.querySelector('.calculate-each').addEventListener('click',()=>{
    if(tAmount.innerHTML==0){
        alert("Enter total people")
        amountE.innerHTML=0;
    }
    tipAmount.innerHTML=tipP.value/100*bill.value;
    tAmount.innerHTML=Number(bill.value)+Number(tipAmount.innerHTML);
    amountE.innerHTML=Number(tAmount.innerHTML)/Number(numberP.value);
})


document.addEventListener('DOMContentLoaded',()=>{
    bill.value=0;
    tipP.value=0;
    numberP.value=0
})