var navbar = new XMLHttpRequest();
navbar.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementsByTagName("nav")[0].innerHTML = navbar.responseText;
    }
};
navbar.open("GET", "/Flowers/assets/navbar.html", true);
navbar.send();
