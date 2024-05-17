const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOne = document.querySelector(".currency-select-one")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor real
    const currencyValueConverted = document.querySelector(".currency-value") // outros valores



    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.5
    const bitcoinToday = 316217



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)


    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)


    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)


    }


    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",


        }).format(inputCurrencyValue)


    }

    if (currencySelectOne.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",

        }).format(inputCurrencyValue)

    }

    if (currencySelectOne.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",

        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelectOne.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",

        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelectOne.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",

        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelectOne.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",

        }).format(inputCurrencyValue / bitcoinToday)

    }



}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")//id não precisa .
    const currencyImg = document.querySelector(".currency-img")
    const imgDolar = document.querySelector(".img-usa")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
        imgDolar.src = "./assets/dollar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
        imgDolar.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
        imgDolar.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
        imgDolar.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
        imgDolar.src = "./assets/real.png"
    }



    convertValues()

}

function changeCurrencyOne() {
    const currencyNameOne = document.getElementById("currency-name-one")//id não precisa .
    const currencyImgOne = document.querySelector(".currency-img1")
    const imgReal = document.querySelector(".img-real")

    if (currencySelectOne.value == "dolar") {
        currencyNameOne.innerHTML = "dolar"
        currencyImgOne.src = "./assets/dollar.png"
        imgReal.src = "./assets/dollar.png"

    }

    if (currencySelectOne.value == "euro") {
        currencyNameOne.innerHTML = "euro"
        currencyImgOne.src = "./assets/euro.png"
        imgReal.src = "./assets/euro.png"

    }

    if (currencySelectOne.value == "libra") {
        currencyNameOne.innerHTML = "libra"
        currencyImgOne.src = "./assets/libra.png"
        imgReal.src = "./assets/bitcoin.png"

    }

    if (currencySelectOne.value == "bitcoin") {
        currencyNameOne.innerHTML = "bitcoin"
        currencyImgOne.src = "./assets/bitcoin.png"
        imgReal.src = "./assets/bitcoin.png"

    }

    if (currencySelectOne.value == "real") {
        currencyNameOne.innerHTML = "real"
        currencyImgOne.src = "./assets/real.png"
        imgReal.src = "./assets/real.png"

    }

    convertValues()


}




currencySelectOne.addEventListener("change", changeCurrencyOne)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
