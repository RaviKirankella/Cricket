function calc1() {
	document.getElementById("test").innerHTML="Good";
}

function calc() {
	var x = document.getElementsByClassName("field");
	var i;
	var val="";
	var adv=0;
	
	for (i = 0; i < x.length; i++) {
		val = x[i].value;
		if (val =="") {
			adv +=-2.5;
		}
		else {
			adv += parseFloat(getval(val));
		}
		
	}
	adv = Math.exp(-adv);
	adv = 100/(1+adv);
	adv = Math.round(adv);
	document.getElementById("advantage").innerHTML=adv;
}

function getval(val) {
	var list = getlist("list");
	var values = getlist("values");
	var index = list.indexOf("val")
	return values[index];
}

function getlist(type) {
	var list = ["20/20", "Limited Overs", "Home", "Away", "A. Albasri", "A. East", "A. Mohammad", "A. Shariff", "A. Symons", 
		    "B. Harden", "B. Shepherd", "C. Tarratt", "D. Henry", "D. Penhallurick", "D. Valsan", "D.J. Lawrence", 
		    "G. Barker", "G. Gardner-Morrison", "H. Hudson", "H. Stoneman", "J. Gifford", "J. Khawaja", "J. Ponsford", 
		    "J. Walter", "K. Bhaskaran", "K. Ponsford", "K. Siddireddy", "K.H. Whiter", "L. Blatchford", "L. Whitby", 
		    "M. Naqvi", "M. Stanbury", "M. Thompson", "N. Hardy", "N. Hussain", "N. Khawaja", "N.H.R. Wyatt", "O. Walter", 
		    "P. Davenport", "P. Gregory", "P. Jacobs", "P. Wiblin", "R. Blatchford", "R. Kella", "R. Stephenson", 
		    "R. Stoneman", "R. Tolson", "R. Vellayappan", "R. Venkat", "R. Yennapusa", "S. Gregan", "S. Khawaja", 
		    "S. Mistry", "S. Sivalingam", "W. Green", "Other Player", "Aldworth", "Appleton", "Astons", 
		    "Bartlemas C.C. (formerly Probationers)", "Blackwells", "Blenheim Park", "Bodleian Library", "Charlton-on-Otmoor", 
		    "Cherwell School Staff", "Cholsey", "Enstone", "Far from the MCC", "Garsington", "HCL", "Ibstone", 
		    "Iffley Village", "Infosys", "Ipsden", "Islip", "Keen Crcketers", "Kempsford", "Kingston Bagpuize", 
		    "Lord Williams Staff", "Neilsen Media Research", "Nomads C.C.", "Oxford University Press", 
		    "Oxfordshire County Council", "Quokkers", "Railway Taverners", "United Oxford Hospitals", "Wolvercote", 
		    "Wooton & Boars Hill", "Wytham", "Other Team"];
	var values = ["-0.523197186", "0.945752255", "0.658961456", "-0.28979753", "-0.748698088", "-0.246928466", "-0.427839487", 
		      "-0.139761906", "-0.117700717", "-0.385795973", "1.557654443", "0.006374111", "0.80310034", "-0.498289193", 
		      "-0.708067056", "-0.09769624", "-0.272962239", "0.837866765", "-1.138473758", "-0.4824589", "1.118771855", 
		      "0.005465682", "0.517869386", "-0.313633848", "-0.816812734", "-0.445784799", "1.329999602", "-0.176296314", 
		      "0.618571437", "0.8006916", "-1.200324754", "-0.683908311", "1.052235659", "0.262329155", "0.10360404", 
		      "0.554080617", "-0.089367866", "0.090314554", "-0.144238718", "0.709235298", "0.236085736", "-1.649298062", 
		      "-0.696614548", "0.57967021", "0.360022592", "-0.130452919", "1.210420864", "0.326502356", "0.978775746", 
		      "1.917447607", "0.850125358", "0.07109761", "1.5410742", "0.587643796", "0.743057413", "0.25906831", 
		      "0.690284156", "-0.546580657", "-0.19396766", "-0.129849814", "0.600905479", "-0.485228842", "1.178184227", 
		      "0.179676565", "-0.358216385", "1.549837685", "0.500591686", "-1.390758243", "-0.222843283", "-0.669926887", 
		      "-0.323194917", "0.126074382", "-0.6971351", "-0.613614475", "0.173886831", "0.770805643", "1.52141453", 
		      "-2.558869461", "-0.716396034", "-0.008117923", "1.701402826", "2.013392127", "0.269266084", "0.129705562", 
		      "0.825761395", "-2.355817909", "-0.860504885", "-0.123890036", "1.695161506", "-1.302274246"];
	var playerstartindex = 4;
	var playerendindex = list.indexOf("Other Player");
	var oppstartindex = list.indexOf("Other Player")+1;
	
	if (type=="Players") {return list.slice(playerstartindex, playerendindex+1);}
	else if (type=="Opposition") {return list.slice(oppstartindex);}
	else if (type=="list") {return list;}
	else if (type=="values") {return values;}
	else {return list;}
}


