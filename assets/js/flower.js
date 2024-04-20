const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
var flower = new XMLHttpRequest();
flower.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var flowerdata = JSON.parse(this.responseText)
       console.log(flowerdata);
       document.getElementById("title").innerHTML = flowerdata[id].title;
       document.getElementById("card-title").innerHTML = flowerdata[id].card_title;
       document.getElementById("image").src = flowerdata[id].image_url;
       document.getElementById("colour").innerHTML = flowerdata[id].colour;
       document.getElementById("type").innerHTML = flowerdata[id].type;
       document.getElementById("found-in").innerHTML = flowerdata[id].found_in;
       document.getElementById("sells-for").innerHTML = flowerdata[id].price;
       document.getElementById("description").innerHTML = flowerdata[id].description;
        for (let i = 0; i < flowerdata[id].drops.length; i++) {
            var row = document.getElementById("droptable").insertRow(-1);
       var itemName = row.insertCell(0);
       var rate = row.insertCell(1);
            itemName.innerHTML = flowerdata[id].drops[i].item;
            rate.innerHTML = flowerdata[id].drops[i].rate;
        }

        for (let ii = 0; ii < flowerdata[id].related.length; ii++) {
            var col = document.createElement("div");
            col.classList.add("col");

            var card = document.createElement("div");
            card.classList.add("card");
            card.classList.add("mb-3");

            var row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("g-0");

            var imgcol = document.createElement("div");
            imgdiv.classList.add("col-md-4");

            var img = document.createElement("img");
            img.setAttribute("src", flowerdata[flowerdata[id].related[ii]].image_url);

            var bodycol = document.createElement("div");
            bodycol.classList.add("col-md-8");

            var bodydiv = document.createElement("div");
            bodydiv.classlist.add("card-body");

            var title = document.createElement("h5");
            title.classList.add("card-title");
            title.innerHTML = flowerdata[flowerdata[id].related[ii]].title;

            var p = document.createElement("p");
            p.classList.add("card-text");
            p.innerHTML = flowerdata[flowerdata[id].related[ii]].description;

            bodydiv.appendChild(title);
            bodydiv.appendChild(p);
            bodycol.appendChild(bodydiv);

            imgcol.appendChild(img);

            row.appendChild(imgcol);
            row.appendChild(bodycol);

            card.appendChild(row);

            col.appendChild(card);

            document.getElementById("related").appendChild(col);
        }
    }
};
flower.open("GET", "/Flowers/data/flowers.json", true);
flower.send();
