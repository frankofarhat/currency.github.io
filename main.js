
function convertCurrency() {
    const amount = document.querySelector(".amount").value;
    const from = document.querySelector(".fromCurrency").value;
    const to = document.querySelector(".toCurrency").value;
    const resultDiv = document.querySelector(".result");

    if (amount && from && to) {
fetch (`https://v6.exchangerate-api.com/v6/4ae059f7f007973c98e5dfe9/latest/${from}`)
.then((response) => response.json())
.then((data) => {
    const rate = data.conversion_rates[to];
    const result = (amount * rate).toFixed(2);
    resultDiv.innerHTML =`${amount} ${from} = ${result} ${to}`;
}).catch((error) => {
    resultDiv.innerHTML = `Something Went Wrong ${error}`;
});
    } else {
        result.innerHTML = "Please Enter A Amount";
    }
}




