function loc_list(type) {
  var loc_lst =[[ 'Queens', 'OX1 4PP', 51.743363, -1.252402], 
			[ 'SSJ', 'OX33 1ET', 51.774466, -1.162412], 
			[ 'Eynsham', 'OX29 4LF', 51.785588, -1.360644], 
			[ 'Peppard Stoke Row', 'RG9 5JD', 51.528351, -0.988155], 
			[ 'Appleton', 'OX13 5QW', 51.6983675, -1.3756933],
			[ 'Bartlemas', 'OX4 2AE', 51.745539, -1.225515], 
			[ 'Enstone', 'OX7 4AZ', 51.911547, -1.451832], 
			[ 'Ipsden', 'OX10 6AL', 51.560684, -1.087598], 
			[ 'Islip', 'OX5 2SP', 51.823254, -1.239241], 
			[ 'Kempsford', 'GL7 4EQ', 51.669613, -1.772568], 
			[ 'Middleton Stoney', '', , ], 
			[ 'Minster Lovell', 'OX29 0RN', 51.798214, -1.538759], 
			[ 'OUP (Jordan Hill)', 'OX2 8EU', 51.793405, -1.275522], 
			[ 'Peppard Stoke Row', 'RG9 5JD', 51.528351, -0.988155], 
			[ 'Swindon Nomads', '', , ], 
			[ 'Temple Cloud', '', , ], 
			[ 'Wiley-Blackwells (Horsepath)', 'OX33 1RT', 51.737729, -1.175608], 
			[ 'Wolvercote (Cutteslowe Park)', 'OX2 8NP', 51.792418, -1.265106], 
			[ 'Wytham', 'OX2 8QA', 51.775372, -1.312852]];
	if (type=="valid") {return loc_lst.filter(checkvalid);}
	else {return loc_st;}
      }

function checkvalid(loc_rec) {
	return loc_rec[1] != "";
}
