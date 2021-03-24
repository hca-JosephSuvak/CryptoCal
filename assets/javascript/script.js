// creating more global variables for User Input responses...
var userSearch = document.querySelector("#crypto-form");
var cryptoName = document.querySelector("#crypto");
var cryptoContainerEl = document.querySelector("#crypto-container");

var formSubmitHandler = function(event) {
    // preventing page from refreshing...
    event.preventDefault();
  
    // getting value from input element...
    var crypto = cryptoName.value.toLowerCase()
  
    if (crypto) {
      searchCrypto(crypto);
  
      // clearing old content...
      cryptoContainerEl.textContent = "";
      cryptoName.value = "";
      console.log(JSON.stringify(crypto));
    } else {
      alert("Please enter a valid crypto");
    }
  };


// creating a function that fetches the Crypto Exchanges list API...
var searchCrypto = function() {
  
    var apiUrl = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + cryptoName.value.toLowerCase());
  
    // fetching the API and making sure the async works with console log...
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
          var info = (JSON.stringify(data));
        console.log(info);
       
      });
    });
  };
  
  searchCrypto(userSearch);


  userSearch.addEventListener("submit", formSubmitHandler);