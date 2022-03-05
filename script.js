function lastedit(){
  var lastestDate = new Date(document.lastModified);
  document.getElementById("time").innerHTML = "Last modified on: " + lastestDate;
}