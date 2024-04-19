var navbar = new XMLHttpRequest();
navbar.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementsByTagName("nav")[0].innerHTML = navbar.responseText;
    }
};
navbar.open("GET", "/Flowers/assets/navbar.html", true);
navbar.send();

var navdata = new XMLHttpRequest();
navdata.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var categories = JSON.parse(this.responseText).categories;
       for (let i = 0; i < categories.length; i++) {
         var li = document.createElement("li");
         li.classList.add("nav-item");
         if (categories[i].dropdown == true) {
           li.classList.add("dropdown");

           //title
           var a = document.createElement("a");
           a.classList.add("nav-link");
           a.classList.add("dropdown-toggle");
           a.setAttribute("href","#");
           a.setAttribute("role","button");
           a.setAttribute("data-bs-toggle","dropdown");
           a.innerHTML = categories[i].name;

           //dropdown list
           var ul = document.createElement("ul");
           ul.classList.add("dropdown-menu");

           for (let ii = 0; ii < categories[i].subcategories.length; ii++) {
             var subcategoryheaderli = document.createElement("li");
             var subcategoryheaderh6 = document.createElement("h6");
             subcategoryheaderh6.innerHTML = categories[i].subcategories[ii].name;
             subcategoryheaderli.appendChild(subcategoryheaderh6);
             ul.appendChild(subcategoryheaderli);

             for (let iii = 0; iii < categories[i].subcategories[ii].values.length; iii++) {
               var dropdownitem = document.createElement("li");
               var link = document.createElement("a");
               link.innerHTML = categories[i].subcategories[ii].values[iii].name;
               link.setAttribute("href", "/Flowers/" + categories[i].subcategories[ii].values[iii].link);
               link.classList.add("dropdown-item");
               dropdownitem.appendChild(link);
               ul.appendChild(dropdownitem);
             }

             var dividerli = document.createElement("li");
             var divider = document.createElement("hr");
             divider.classList.add("dropdown-divider");
             dividerli.appendChild(divider);
             ul.appendChild(dividerli);
           }

           li.appendChild(a);
           li.appendChild(ul);
           console.log(li);
         }
       }
    }
};
navdata.open("GET", "/Flowers/data/navbar.json", true);
navdata.send();

// retry because github wont deploy to pages
