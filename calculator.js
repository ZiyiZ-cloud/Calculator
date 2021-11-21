window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    let values = { amount: 10000, years: 10, rate: 10 };
    let initialAmount = document.getElementById('loan-amount');
    initialAmount.value = values.amount;
    let initialYears = document.getElementById('loan-years');
    initialYears.value = values.years;
    let initialRate = document.getElementById('loan-rate');
    initialRate.value = values.rate;
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    let CurrentValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(CurrentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let period = values.years * 12;
    let monthlyRate = (values.rate / 100) / 12;
    let monthly = ((values.amount * monthlyRate) / (1 - (1 + monthlyRate) ** (-period))).toFixed(2);
    return monthly;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    let monthlyResult = document.getElementById('monthly-payment');
    monthlyResult.innerText = "$" + monthly;
}