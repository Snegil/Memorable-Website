function FastToggle(ID) {
	var x = document.getElementById(ID);
	if (x.style.display !== "inline-block") {
	x.style.display = "inline-block";
	} else {
		x.style.display = "none";
	}
}