//For new date
function lastedit(){
  var lastestDate = new Date(document.lastModified);
  document.getElementById("time").innerHTML = "Last modified on: " + lastestDate;
}
//method for changing color to red
function redColor(){
  document.getElementById("button").style.backgroundColor = "red";
}
//method for changing color to blue
function blueColor(){
  document.getElementById("button").style.backgroundColor = "blue";
}
//method for changing color to yellow
function yellowColor(){
  document.getElementById("button").style.backgroundColor = "yellow";
}

function text(){
  console.log("it is working");
}

lastedit();