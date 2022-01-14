function calculateTip(tipPercent) {
    if(!isValidTipPercent(tipPercent)) {
        return;
    }

    // Get the amount from the html input element
    var amount = document.getElementById('amount').value;
    
    // Validate the amount is not empty
    if(amount === '') {
        alert('Please enter a bill amount.');

        return;
    }

    // Calculate the total including tip
    var total = amount * ((tipPercent / 100) + 1);

    // Set the html totalBillAmount to the total to a 2 place fixed decimal
    document.getElementById('totalBillAmount').value = total.toFixed(2);
}


function isValidTipPercent(tipPercent) {
    // Validate tip percent isnt negative
    if(tipPercent < 0) {
        alert('Please enter a tip percent greater than 0.');

        return false;
    } else if(tipPercent > 100) {
        alert('Please enter a tip percent less than 100.');
        
        return false;
    }

    return true;
}
