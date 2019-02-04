pizza_list = ["Margeritha","Shoarma","Kaas","Salami","Hawai"];

var container = document.getElementById("pizzas");
 
function createPizzaList(){
  
  // lengte van de array berekenen
  var listLength = pizza_list.length;
  
  
  if(listLength > 0){
    
    // Het maken van het ul element  
    var myList = document.createElement("ul");

    myList.className = "list";

    for(var i=0; i<listLength; i++){

      var listItem = document.createElement("li");

      var listValue = document.createTextNode(pizza_list[i]);

      listItem.appendChild(listValue); 

      myList.appendChild(listItem);
    }

    container.appendChild(myList);
    
  } 
}
 
createPizzaList();