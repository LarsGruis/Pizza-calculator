// Naam: Lars Gruis
// Opdracht: Pizza calculator

// Dit is de code die ervoor zorgt dat als je een pizza kiest, je naar een nieuwe pagina gaat waar de informatie van je gekozen pizza op staat.

pizza_list = ["Margeritha","Shoarma","Kaas","Salami","Hawai"];
pizza_prices = [8, 9, 8.50, 8, 7.50];
pizza_slices = [1, 1.2, 1.4, 2];
allPrices = [];
priceGlobalArray = [];
deliveryPriceArray = [];
pinPriceArray = [];
var sum = 0;
var deliveryPrice = 2;
var pinPrice = 2;

var totalPrice = 0;
var totalPinPrice = 0;
var container = document.getElementById("pizzas");

//hiermee wordt de lijst van pizzas gegenereerd
 
function createPizzaList(){

  var pizza_omschrijving = document.getElementById('pizza_omschrijving').style.display = 'none';
  
  // lengte van de array berekenen
  var listLength = pizza_list.length;
  
  if(listLength > 0){
    
    // Het maken van het ul element  
    var myList = document.createElement("ul");

    document.getElementById('pizzas').appendChild(myList);

    for(var i = 0; i<listLength; i++){

      var listItem = document.createElement("li");

      // id wordt meegegeven aan de li

      listItem.setAttribute("id", i);

      // er wordt een naam gedisplayed uit de pizza_list array

      var listValue = document.createTextNode(pizza_list[i]);

      listItem.appendChild(listValue); 

      myList.appendChild(listItem);

      document.getElementById(i).onclick = function() {
        hidePizzaList(this.id);
      }
    }

    container.appendChild(myList);
  } 

  console.log(createPizzaList);
}

// Einde

// Dit is de code die ervoor zorgt wat je ziet na het kiezen van een pizza. Dus je ziet de naam van de pizza, hoe de pizza eruit ziet en wat de prijs is. 

function hidePizzaList($id) {

    var hideList = document.getElementById('hide_list');
    var pizzaName = document.getElementById('pizza_name');
    var pizzaPhoto = document.getElementById('pizza_photo');
    var pizzaPrice = document.getElementById('pizza_price');

        document.getElementById('pizza_omschrijving').style.display = 'block';
        hide_list.style.display = 'none';
        pizza_name.innerHTML = 'Uw gekozen pizza: ' + pizza_list[$id];
        pizzaPhoto.src = pizza_list[$id] + ".jpg";
        pizza_price.innerHTML = 'De prijs van uw pizza: €' + pizza_prices[$id];

        var price = pizza_prices[$id];
        allPrices.push(price);

        console.log(hidePizzaList);
}

// Einde 

topping_list = ["Salami","Geraspte kaas","Augurk","Ui","Peper","Kruiden"];
topping_price_list = [2.50, 1, 0.75, 0.50, 0.25, 0.25];

// hiermee wordt de toppinglijst in javascript gegenereerd
 
function createToppingList(){
  
  // lengte van de array berekenen

  var topping_container = document.getElementById("toppings");
  var toppingListLength = topping_list.length;
  
  if(toppingListLength > 0){
    
    // Het maken van het ul element  
    var myToppingList = document.createElement("ul");

      myToppingList.setAttribute("id", 'toppinglist');

      topping_container.appendChild(myToppingList);

    for(var x = 0; x < toppingListLength; x++){

    // er wordt een naam gedisplayed uit de topping_list array

    var toppingListValue = document.createTextNode(topping_list[x] + ' €' + topping_price_list[x] );

    // element LI wordt gecreerd

      var toppingListItem = document.createElement("li");

      toppingListItem.setAttribute("id", "li" + x);

      toppingListItem.appendChild(toppingListValue); 

      myToppingList.appendChild(toppingListItem);

      document.getElementById('li' + x).onclick = function() {
        selected(this.id);

      console.log(createToppingList);
      }
    }
  } 
}

// deze code zorgt ervoor dat als je een topping aanklikt dat deze rood wordt en dat de prijs van de topping bij de prijs van de pizza wordt opgeteld.

function selected(id){
    document.getElementById(id).style.background = "#3f7007";
    var unselect = id.slice(-1);
    var unselected = unselect.slice(-1);
    console.log(unselected);

    allPrices.push(topping_price_list[unselected]);

    sum = allPrices.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }

    document.getElementById('pizza_price').innerHTML = 'De prijs van uw pizza: €' + sum ;
    document.getElementById('slices').style.display = 'block';
    document.getElementById('slices').style.float = 'left';

    console.log(selected);
}

// deze code zorgt ervoor dat de prijs van de pizza wordt vermenigdvuldigt met de grootte die je aanklikt

function multiplyPrice(id) {

  // dit zorgt ervoor dat de prijs van de pizza vermenigvuldigt wordt met de grootte die je aanklikt

    multipliedPrice = sum * pizza_slices[id]; 

    priceGlobalArray.push(multipliedPrice);

  totalPrice = priceGlobalArray.reduce(add, 0);

  function add(c, d) {
        return c + d;
    }

  document.getElementById('pizza_price').innerHTML = 'De prijs van uw pizza: €' + totalPrice;
  document.getElementById('toppings').style.display = 'none';
  document.getElementById('home_delivery').style.display = 'block';

  console.log(multiplyPrice);
}

// code van de checkbox

function check(id) {
  document.getElementById("myCheck").checked = true;

  // dit zorgt ervoor dat de prijs van de pizza vermenigvuldigt wordt met de grootte die je aanklikt

    newPrice = deliveryPrice + totalPrice; 

    deliveryPriceArray.push(newPrice);

  totalNewPrice = deliveryPriceArray.reduce(add, 0);

  function add(c, d) {
        return c + d;
    }

  document.getElementById('pizza_price').innerHTML = 'De prijs van uw pizza: €' + totalNewPrice;

  document.getElementById('home_delivery').style.display = 'none';

  document.getElementById('payment_choice').style.display = 'block';

  console.log(check);

}

function pin(id) {
  document.getElementById("payByPin").checked = true;

  // dit zorgt ervoor dat de prijs van de pizza vermenigvuldigt wordt met de grootte die je aanklikt

    newPinPrice = totalNewPrice - pinPrice; 

    pinPriceArray.push(newPinPrice);

  totalNewPinPrice = pinPriceArray.reduce(add, 0);

  function add(x, z) {
        return x + z;
    }

  document.getElementById('pizza_price').innerHTML = 'De prijs van uw pizza: €' + totalNewPinPrice;

  document.getElementById('payment_choice').style.display = 'none';

  console.log(pin);

}


function changeBackground() {
  click = true;

  if (click) {
    document.getElementById('red').style.background = '#f44336';

    click = false;
  } 
  else{
    document.getElementById('red').style.background = 'white';

    click = true;
  }
}


function uncheck() {
  document.getElementById("myCheck").checked = false;
}

function green_alert() {
  document.getElementById('green_alert').style.display = 'block';

  setTimeout(function green_alert(){ 
    document.getElementById('green_alert').style.display = "none";
   }
    , 3500);

  console.log(green_alert);
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}





























// var toppingPrijs_container = document.getElementById("toppings_prijzen");
 
// function createToppingPriceList(){
  
//   // lengte van de array berekenen
//   var toppingPriceListLength = topping_list.length;
  
//   if(toppingPriceListLength > 0){
    
//     // Het maken van het ul element  
//     var myPriceToppingList = document.createElement("ul");

//     for(var x = 0; x < toppingPriceListLength; x++){

//       myPriceToppingList.className = "toppingpricelist" + x;

//       var toppingPriceListItem = document.createElement("li");

//       var toppingPriceListValue = document.createTextNode(topping_price_list[x]);

//       toppingPriceListItem.appendChild(toppingPriceListValue); 

//       myPriceToppingList.appendChild(toppingPriceListItem);

//       document.getElementsByClassName('toppingpricelist' + x).onclick = function() {
//         test(this.class);
//       }
//     }

//     toppingPrijs_container.appendChild(myPriceToppingList);
//   } 
// }








