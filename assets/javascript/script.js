// creating more global variables for User Input responses...
var userSearch = document.querySelector("#crypto-form");
var cryptoName = document.querySelector("#crypto");
var cryptoContainerEl = document.querySelector("#crypto-container");

var formSubmitHandler = function(event) {
    // preventing page from refreshing...
    event.preventDefault();
  
    // getting value from input element...
    var crypto = cryptoName.value.toLowerCase()
  
    if (crypto !== "[]") {
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
  // fetching the coinlist to learn to target only the crypto IDs...
  var coinList = ("https://api.coingecko.com/api/v3/coins");
  fetch(coinList)
  .then(function(response) {
    console.log(response);
    response.json().then(function(data) {
    var cryptoId = (JSON.stringify(data));
    console.log(cryptoId);
    });
})
  
  searchCrypto(userSearch);


  userSearch.addEventListener("submit", formSubmitHandler);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}