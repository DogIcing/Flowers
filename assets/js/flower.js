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
    }
};
flower.open("GET", "/Flowers/data/flowers.json", true);
flower.send();
// retry
