var array = new Array();

class Locations {
    name:"";
    city:"";
    zip_code:"";
    address:"";
    img:"";
    type:"";

    constructor(name,city,zip_code,address,img,type){
        this.name=name;
        this.city = city;
        this.zip_code=zip_code;
        this.address=address;
        this.img=img;
        this.type=type; // For making it easier to display stuff (place/restaurant/event)
    }

    displayPlace(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="#">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-white">
        <h4 class="h4">${this.name}</h4>
        <p><b>Address:</b><br> ${this.address}, <br>${this.zip_code} ${this.city}</p>
        <hr>
        </div>
        </div>`
    }
};

class Restaurants extends Locations {
    food_type:"";
    number:"";
    website:"";
    
    constructor(name,city,zip_code,address,img,type,food_type,number,website) {
        super(name,city,zip_code,address,img,type);
        this.food_type = food_type;
        this.number=number;
        this.website = website;
    }
    displayRestaurant(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="#">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-white">
        <h4 class="h4">${this.name}</h4>
        <p><b>Address:</b><br> ${this.address}, <br>${this.zip_code} ${this.city}</p>
        <p><b>Food Type:</b><br> ${this.food_type}</p>
        <p><b>Phone:</b><br> ${this.number}</p>
        <p><b>Website:</b><br> <a href="${this.website}" class="text-white">${this.website}</a></p>
        <hr>
        </div>
        </div>`
    }
};

class Events extends Locations {
    date:"";
    time:"";
    entry:"";
    website:"";
    constructor(name,city,zip_code,address,img,type,date,time,entry,website){
        super(name,city,zip_code,address,img,type);
        this.date=date;
        this.time=time;
        this.entry=entry;
        this.website = website;
    }

    displayEvents(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="#">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-white">
        <h4 class="h4">${this.name}</h4>
        <p><b>Address:</b><br> ${this.address}, <br>${this.zip_code} ${this.city}</p>
        <p><b>When:</b><br> ${this.date}, ${this.time}</p>
        <p><b>How much:</b><br> ${this.entry}</p>
        <p><b>Website:</b><br><a href="${this.website}" class="text-white">${this.website}</a></p>
        <hr>
        </div>
        </div>`
    }
};

function displayPlaces(){
    var arrayPlaces = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="place") {
            arrayPlaces.push(array[index]);
        }   
    }
    for (let i = 0; i < arrayPlaces.length; i++) {
        $("#places").append(arrayPlaces[i].displayPlace()) 
    }
};

function displayRestaurants(){
    var arrayRestaurants = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="restaurant") {
            arrayRestaurants.push(array[index]);
        }   
    }
    for (let i = 0; i < arrayRestaurants.length; i++) {
        $("#restaurants").append(arrayRestaurants[i].displayRestaurant()) 
    }
};

function displayEvents(){
    var arrayEvents = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="event") {
            arrayEvents.push(array[index]);
        }   
    }
    for (let i = 0; i < arrayEvents.length; i++) {
        $("#events").append(arrayEvents[i].displayEvents()) 
    }
};


// creating Locations
array.push(new Locations("St. Charles Church","Vienna","1010","Karlsplatz 1","img/st_charles_church.jpg","place"));
array.push(new Locations("Schönbrunn Park","Vienna","1130","Maxingstraße 13b","img/schoenbrunn.jpg","place"));
array.push(new Locations("Prater","Vienna","1020","Riesenradplatz 2","img/prater.jpg","place"));

// creating Restaurants
array.push(new Restaurants("ON","Vienna","1050","Wehrgasse 8","img/on.jpg","restaurant","chinese","+43(1)5854900","www.restaurant-on.at/"));
array.push(new Restaurants("BioFrische","Vienna","1150","Stutterheimstraße 6","img/bio_frische.jpg","restaurant","indian","+43(1)9529215","biofrische.wien"));
array.push(new Restaurants("Swing Kitchen","Vienna","1070","Schottenfeldgasse 3","img/swing_kitchen.jpg","restaurant","vegan","no number available","www.swingkitchen.com"));

// creating Events
array.push(new Events("Das Sommerkonzert","Vienna","1010","Musikvereinsplatz 1","img/sommerkonzert.jpg","event","19.Juni 2020","19:30","€ 150,00","www.musikverein.at"));
array.push(new Events("Das Trojanische Pferd","Vienna","1090","Pozellangasse 19","img/das_trojanische_pferd.jpg","event","20.Juni 2020","20:00","€ 17,00","www.schauspielhaus.at"));
array.push(new Events("Feel Good Festival 2020","Vienna","1190","Hohe Warte Stadion","img/feel_good.jpg","event","28.Juni","09:00","€ 29,00","www.feelgood-festival.at/"));
// displaying everything inside the HTML w/ jQuery
displayPlaces();
displayRestaurants();
displayEvents();
