// creating a function that fetches the Crypto Exchanges list API...
var searchCrypto = function() {
  
    var apiUrl = "https://api.coingecko.com/api/v3/exchanges/list"
  
    // fetching the API and making sure the async works with console log...
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        console.log(JSON.stringify(data));
        console.log("The fetch works!");
      });
    });
  };
  
  searchCrypto();