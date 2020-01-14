document.getElementById('loan-form').addEventListener('submit', function(e){
    
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults , 2000);
    
    e.preventDefault();
});

function calculateResults(e){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    const alertMessage = document.getElementById('alert-message');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest) / (x - 1);

    if (isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = 'none';
        alertMessage.style.display = 'block';
        setTimeout(() => {
            alertMessage.style.display = 'none';
        }, 3000);
    }
}