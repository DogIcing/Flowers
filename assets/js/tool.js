const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
var tool = new XMLHttpRequest();
tool.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var tooldata = JSON.parse(this.responseText)
       console.log(tooldata);
       document.getElementById("title").innerHTML = tooldata[id].title;
       document.getElementById("card-title").innerHTML = tooldata[id].card_title;
       document.getElementById("image").src = tooldata[id].image_url;
       document.getElementById("base").innerHTML = tooldata[id].base_dmg;
       document.getElementById("green").innerHTML = tooldata[id].green_multi;
       document.getElementById("blue").innerHTML = tooldata[id].blue_multi;
       document.getElementById("red").innerHTML = tooldata[id].red_multi;
       document.getElementById("price").innerHTML = tooldata[id].price;
       document.getElementById("description").innerHTML = tooldata[id].description;

        for (let ii = 0; ii < tooldata[id].related.length; ii++) {
            var col = document.createElement("div");
            col.classList.add("col");

            var card = document.createElement("a");
            card.classList.add("card");
            card.classList.add("mb-3");
            card.classList.add("text-decoration-none");
            card.setAttribute("href", "tool?id=" + tooldata[id].related[ii])

            var row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("g-0");

            var imgcol = document.createElement("div");
            imgcol.classList.add("col-md-4");

            var img = document.createElement("img");
            img.setAttribute("src", tooldata[tooldata[id].related[ii]].image_url);
            img.classList.add("img-fluid");
            img.classList.add("m-2");

            var bodycol = document.createElement("div");
            bodycol.classList.add("col-md-8");

            var bodydiv = document.createElement("div");
            bodydiv.classList.add("card-body");

            var title = document.createElement("h5");
            title.classList.add("card-title");
            title.innerHTML = tooldata[tooldata[id].related[ii]].title;

            var p = document.createElement("p");
            p.classList.add("card-text");
            p.innerHTML = tooldata[tooldata[id].related[ii]].description;

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
tool.open("GET", "/Flowers/data/tools.json", true);
tool.send();
