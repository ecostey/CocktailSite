/*Index SideNav Panel*/
	function openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
    	document.getElementById("main").style.marginLeft = "250px";
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}

	function closeNav() {
    	document.getElementById("mySidenav").style.width = "0";
    	document.getElementById("main").style.marginLeft = "0";
    	document.body.style.backgroundColor = "white";
	}
/*Tab Header All pgs*/ 
    function openRecipe(cocktailName,element,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cocktailName).style.display = "block";
    element.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();