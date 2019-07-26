var click = document.getElementById('clickMe');

// DEBUG ME 
click.addEventListener('click', function(event) {
  var nothingWrong = document.createElement("p");
  var node = document.createTextNode("There is nothing wrong with you.");
  nothingWrong.appendChild();

  var element = document.getElementById("div1");
  element.appendChild(nothingWrong);
});