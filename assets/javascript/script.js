// creating more global variables for User Input responses...
var userSearch = document.querySelector("#crypto-form");
var cryptoName = document.querySelector("#crypto");
var cryptoContainerEl = document.querySelector("#crypto-container");

var formSubmitHandler = function (event) {
  // preventing page from refreshing...
  event.preventDefault();

  // getting value from input element...
  var crypto = cryptoName.value.toLowerCase();

  const emptyArray = [];

  if (crypto.length > 0) {
    searchCrypto(crypto);

    // clearing old content...
    cryptoContainerEl.textContent = "";
    cryptoName.value = "";
    console.log(JSON.stringify(crypto));
  } else {
    //alert("Please enter a valid crypto");
    //alert("Not a valid crypto, try again!")
    //console.log("not a valid crypto")
  }
};


// creating a function that fetches the Crypto Exchanges list API...
var searchCrypto = function () {

  var apiUrl = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + cryptoName.value.toLowerCase());

  // fetching the API and making sure the async works with console log...
  fetch(apiUrl).then(function (response) {
    //console.log(response);
    response.json().then(function (data) {


      var info = (JSON.stringify(data[0].current_price));
      if (info === 0) {
        console.log("this is not a valid crypto. try again.")
        //inserting alert as proof of concept...
        alert("Not a valid crypto, try again!")
      } else {
        console.log(info);
      }


    })
  })
};
// fetching the coinlist to learn to target only the crypto IDs...
var coinList = ("https://api.coingecko.com/api/v3/coins");
fetch(coinList)
  .then(function (response) {

    response.json().then(function (data) {

      var cryptoId = data;
      console.log(cryptoId);

      var cryptoPrice = data[0].market_data.current_price.usd;
      //console.log(cryptoPrice);

    });
  })

searchCrypto(userSearch);


userSearch.addEventListener("submit", formSubmitHandler);