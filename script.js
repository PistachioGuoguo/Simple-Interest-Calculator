
const summary = document.querySelector('#result');

function compute()
{
    principal = parseFloat(document.getElementById("principal").value) ;
    interestRate = parseFloat(document.getElementById("interest").value) / 100;
    years = parseInt(document.getElementById("years").value);

    currentYear = new Date().getFullYear();

    // total = principal + principal * interestRate * years;  
    total = principal * interestRate * years;

    summary.innerHTML = `
    If you deposit ${principal},<br>
    at an interest rate of ${interestRate * 100}%.<br>
    You will receive an amount of ${total} ,<br>
    in the year ${currentYear + years}.<br>
    `;

}
        

const interestBar = document.querySelector('#interest');
const interestDisp = document.querySelector('span.interest-disp');


interestBar.addEventListener('change', e=>{
    interestRate = document.getElementById("interest").value;
    interestDisp.innerHTML = interestRate + '%';
})
