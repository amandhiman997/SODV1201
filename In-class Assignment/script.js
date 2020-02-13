
function calculateTaxes(){
    let income = document.getElementById('income').value;
console.log(income);
income = parseInt(income);

let errorMessage = document.getElementById('error');
let taxOwed = document.getElementById('taxOwed');
taxOwed.textContent = "";
let taxRate = document.getElementById('taxRate');
let earnings =document.getElementById('earnings');
let tax;
    try{

        if(income < 0) throw "Add positive number ";
        if (isNaN(income)) throw "Add a Number";



    if(income < 48535) 
    {
       (tax = (income * 15/100)).toFixed(2);
        console.log(tax);
        taxOwed.textContent = "$" +tax;
        taxRate.textContent = "15%";
        earnings.textContent = "$"+(income-tax);
    }

    else if ( income >  48535 && income < 97069)
    {
        (tax = (income * 15/100) + ((income - 48535)* 20.5/100)).toFixed(2);
        console.log(tax);
        taxOwed.textContent = "$" +tax;
        taxRate.textContent = "35.5%";
        earnings.textContent = "$"+(income-tax);


    }

    else if (income > 97069 && income < 150473)
    {
        (tax = (income * 15/100) + ((income - 48535)* 26/100)).toFixed(2);
        console.log(tax);
        taxOwed.textContent = "$" +tax;
        taxRate.textContent = "41%";
        earnings.textContent = "$"+(income-tax);

    }

    else if(income >150473 && income <214368)
    {
       ( tax = (income * 15/100) + ((income - 48535)* 29/100)).toFixed(2);
        console.log(tax);
        taxOwed.textContent = "$" + tax;
        taxRate.textContent = "35.5%";
        earnings.textContent = "$"+ (income-tax);

    }

    else {
    (tax = (income * 15/100) + ((income - 48535)* 29/100)).toFixed(2);
    console.log(tax);
    taxOwed.textContent = "$" +tax;
    taxRate.textContent = "35.5%";
    earnings.textContent = "$"+(income-tax);
    }

}

catch (err) {
    errorMessage.textContent = "Error: " + err;
}

}

const submit = document.getElementById('submit');

submit.addEventListener( "click",function () { 
    calculateTaxes();
    
});


const btnClear =document.getElementById('clear');
function clear() {
  
        taxOwed.textContent = " ";
        taxRate.textContent = " ";
        earnings.textContent = " ";
       document.getElementById('income').value = "";
       document.getElementById("error").textContent = "";
       
}

btnClear.addEventListener("click", function () {
    clear();
});

