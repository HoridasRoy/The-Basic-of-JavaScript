alert("It is my " + bulid_great(5) + "grandmother..");


function bulid_great (depth){ 
	// body... 

	if(depth > 0)
		return "great " + bulid_great(depth - 1);

	else {
		
		return "";
	}
}