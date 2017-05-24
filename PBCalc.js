function calc() {
	var x = document.getElementsByClassName("field");
  var i;
  var val;
	val ="test";

document.getElementById("test").innerHTML=val;
	  for (i = 0; i < x.length; i++) {
    val = val+x[i].nodeValue;
  }
}
