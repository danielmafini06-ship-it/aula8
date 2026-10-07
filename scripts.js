const USD = 4.98
const EUR = 5.61
const GBP = 6.61

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

amount.addEventListener("input", () => {
    console.log(amount.value)
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, '')
    console.log(amount.value)
})

form.onsubmit = (event) => {
    event.preventDefault()
    // console.log(amount.value)
    // console.log(currency.value)

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'USD')
            break

            case 'EUR':
            convertCurrency(amount.value, EUR, 'EUR')
            break

            case 'GBP':
            convertCurrency(amount.value, GBP, 'GBP')
            break
    }
}

function convertCurrency(amount, price, symbol) {
    //console.log(amount, price, symbol)
    try {

        description.textContent = `${symbol} 1 = R$ ${formatCurrencyBRL(price)}`

        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total)} Reais`
        
        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}