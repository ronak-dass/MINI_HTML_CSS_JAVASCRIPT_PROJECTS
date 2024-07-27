function calculaterMaturityAmount(){
    // Get the input values from the elements
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Perform the Calculation

    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    // Display the Result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

document.getElementById('calculateBtn').addEventListener('click', calculaterMaturityAmount)