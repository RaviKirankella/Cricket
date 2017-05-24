function calc1() {
	document.getElementById("test").innerHTML="Good";
}

function calc() {
	var x = document.getElementsByClassName("field");
	var i;
	var val="";
	for (i = 0; i < x.length; i++) {
		val = val+x[i].value;
	}
	document.getElementById("test").innerHTML=val;
}

function getval(val) {
	if (val=="") {return 1;}
	else if (val==" ") {return 0;}
	else {return 0;}
}

function opplist() {
	var opp =  [
"Aldworth",
"Appleton",
"Astons",
"Bartlemas C.C. (formerly Probationers)",
"Blackwells",
"Blenheim Park",
"Bodleian Library",
"Charlton-on-Otmoor",
"Cherwell School Staff",
"Cholsey",
"Enstone",
"Far from the MCC",
"Garsington",
"HCL",
"Ibstone",
"Iffle-y Village",
"Infosys",
"Ipsden",
"Islip",
"Keen Crcketers",
"Kempsford",
"Kingston Bagpuize",
"Lord Williams Staff",
"Neilsen Media Research",
"Nomads C.C.",
"Oxford University Press",
"Oxfordshire County Council",
"Quokkers",
"Railway Taverners",
"United Oxford Hospitals",
"Wolvercote",
"Wooton & Boars Hill",
"Wytham",
"Other Team"
    ];
	return opp;
}

