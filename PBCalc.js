function calc() {
	document.getElementById("test").innerHTML="Good";
}

function calc1() {
	var x = document.getElementsByClassName("field");
	var i;
	for (i = 0; i < x.length; i++) {
		val = val+x[i].nodeValue;
	}
}
