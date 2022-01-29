import axios from 'axios';

// Setting the API end points
const FIXER_API_KEY = "52f169d0c28723a30640f8efb6c9f353";
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;
const REST_COUNTRIES_API = `https://restcountries.com/v3.1/currency`;


//Fetch data about the currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const { data: { rates } } = await axios.get(FIXER_API);
    // console.log(rates);
    const rate = 1/rates[fromCurrency];
    const exchangeRate = rate * rates[toCurrency];
    return exchangeRate;
};


// getExchangeRate('USD', 'EUR

// Fetch data about the countries
const getCountries = async (currencyCode) => {
    const { data } = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`);
    console.log(data.map(({name}) => name));
    return data.map(({name}) => name);
    // arr;
}



// Output data
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();
    const [countries, exchangeRate] = await Promise.all([
        getCountries(toCurrency),
        getExchangeRate(fromCurrency, toCurrency)
    ]);

    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.
    you can spend these in the following countries: ${countries}.`;

}

convertCurrency("USD", "CAD", 20)
    .then((result) => console.log(result));

// convertCurrency('AUD', 'USD', 20);