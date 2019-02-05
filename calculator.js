// Naam: Lars Gruis
// Opdracht: Pizza calculator

// Dit is de code die ervoor zorgt dat als je een pizza kiest, je naar een nieuwe pagina gaat waar de informatie van je gekozen pizza op staat.

pizza_list = ["Margeritha","Shoarma","Kaas","Salami","Hawai"];
pizza_prices = [8, 9, 8.50, 8, 7.50];

var container = document.getElementById("pizzas");
 
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

      listItem.setAttribute("id", i);

      var listValue = document.createTextNode(pizza_list[i]);

      listItem.appendChild(listValue); 

      myList.appendChild(listItem);

      document.getElementById(i).onclick = function() {
        hidePizzaList(this.id);
      }
    }

    container.appendChild(myList);
  } 
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
}

// Einde 

topping_list = ["Salami","Geraspte kaas","Augurk","Ui","Peper","Kruiden"];

var topping_container = document.getElementById("toppings");
 
function createToppingList(){
  
  // lengte van de array berekenen
  var toppingListLength = topping_list.length;
  
  if(toppingListLength > 0){
    
    // Het maken van het ul element  
    var myToppingList = document.createElement("ul");

    for(var x = 0; x < toppingListLength; x++){

      myToppingList.className = "toppinglist" + x;

      var toppingListItem = document.createElement("li");

      var toppingListValue = document.createTextNode(topping_list[x]);

      toppingListItem.appendChild(toppingListValue); 

      myToppingList.appendChild(toppingListItem);

      document.getElementsByClassName('toppinglist' + x).onclick = function() {
        test(this.class);
      }
    }

    topping_container.appendChild(myToppingList);
  } 
}

topping_price_list = [2.50, 1, 0.75, 0.50, 0.25, 0.25];

var toppingPrijs_container = document.getElementById("toppings_prijzen");
 
function createToppingPriceList(){
  
  // lengte van de array berekenen
  var toppingPriceListLength = topping_list.length;
  
  if(toppingPriceListLength > 0){
    
    // Het maken van het ul element  
    var myPriceToppingList = document.createElement("ul");

    for(var x = 0; x < toppingPriceListLength; x++){

      myPriceToppingList.className = "toppingpricelist" + x;

      var toppingPriceListItem = document.createElement("li");

      var toppingPriceListValue = document.createTextNode(topping_price_list[x]);

      toppingPriceListItem.appendChild(toppingPriceListValue); 

      myPriceToppingList.appendChild(toppingPriceListItem);

      document.getElementsByClassName('toppingpricelist' + x).onclick = function() {
        test(this.class);
      }
    }

    toppingPrijs_container.appendChild(myPriceToppingList);
  } 
}