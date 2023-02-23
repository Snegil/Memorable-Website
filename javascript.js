function FastToggle(ID) {
	var x = document.getElementById(ID);
	var body = document.getElementsByName(body);
	if (x.style.display !== "inline-block") {
	x.style.display = "inline-block";
	document.body.style.overflowY = "hidden";
	} else {
		x.style.display = "none";
		document.body.style.overflowY = "auto";
	}
}