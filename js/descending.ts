var array = new Array(); // Empty Array for all Objects

// Creating Parent Class
class Locations {
    name:"";
    city:"";
    zip_code:"";
    address:"";
    img:"";
    type:"";
    visited: any = new Date();

    constructor(name,city,zip_code,address,img,type,visited){
        this.name=name;
        this.city = city;
        this.zip_code=zip_code;
        this.address=address;
        this.img=img;
        this.type=type; // For making it easier to display stuff (place/restaurant/event)
        this.visited=visited; // for sorting
    }
        // Divs that are later printed inside HTML
    displayPlace(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="#">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <p class="text-white"><i class="far fa-eye text-white"></i> ${this.visited}</p>
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

// Creating SubClass
class Restaurants extends Locations {
    food_type:"";
    number:"";
    website:"";
    
    constructor(name,city,zip_code,address,img,type,visited,food_type,number,website) {
        super(name,city,zip_code,address,img,type,visited);
        this.food_type = food_type;
        this.number=number;
        this.website = website;
    }
        // Divs that are later printed inside HTML
    displayRestaurant(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="${this.website}">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <p class="text-white"><i class="far fa-eye text-white"></i> ${this.visited}</p>
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

// Creating SubClass
class Events extends Locations {
    date:"";
    time:"";
    entry:"";
    website:"";
    constructor(name,city,zip_code,address,img,type,visited,date,time,entry,website){
        super(name,city,zip_code,address,img,type,visited);
        this.date=date;
        this.time=time;
        this.entry=entry;
        this.website = website;
    }
        // Divs that are later printed inside HTML
    displayEvents(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="${this.website}">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <p class="text-white"><i class="far fa-eye text-white"></i> ${this.visited}</p>
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

// Function for sorting the Arrays
function compared(a,b) {
    if (a.visited < b.visited) return 1;
    else if (a.visited > b.visited) return -1;
    else return 0;
};

// Creating a function that prints all Locations inside the div#places
function displayPlacesAsc(){
    var arrayPlaces = new Array();
    for (let index in array) {
        if (array[index]["type"]==="place") {
            arrayPlaces.push(array[index]);
        }   
    }
    arrayPlaces.sort(compared);
    for (let i = 0; i < arrayPlaces.length; i++) {
        $("#places").append(`<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="${arrayPlaces[i].website}">
        <img class="d-sm-none d-md-block" src="${arrayPlaces[i].img}" alt="${arrayPlaces[i].name}"></a>
        <p class="text-white"><i class="far fa-eye text-white"></i> ${arrayPlaces[i].visited}</p>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-white">
        <h4 class="h4">${arrayPlaces[i].name}</h4>
        <p><b>Address:</b><br> ${arrayPlaces[i].address}, <br>${arrayPlaces[i].zip_code} ${arrayPlaces[i].city}</p>
        <p><b>Food Type:</b><br> ${arrayPlaces[i].food_type}</p>
        <p><b>Phone:</b><br> ${arrayPlaces[i].number}</p>
        <p><b>Website:</b><br> <a href="${arrayPlaces[i].website}" class="text-white">${arrayPlaces[i].website}</a></p>
        <hr>
        </div>
        </div>`) 
    }
    
};

// Creating a function that prints all Locations inside the div#restaurants
function displayRestaurantsAsc(){
    var arrayRestaurants = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="restaurant") {
            arrayRestaurants.push(array[index]);
        }   
    }
    arrayRestaurants.sort(compared);
    
    for (let i = 0; i < arrayRestaurants.length; i++) {
        $("#restaurants").append(`<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="${arrayRestaurants[i].website}">
        <img class="d-sm-none d-md-block" src="${arrayRestaurants[i].img}" alt="${arrayRestaurants[i].name}"></a>
        <p class="text-white"><i class="far fa-eye text-white"></i> ${arrayRestaurants[i].visited}</p>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-white">
        <h4 class="h4">${arrayRestaurants[i].name}</h4>
        <p><b>Address:</b><br> ${arrayRestaurants[i].address}, <br>${arrayRestaurants[i].zip_code} ${arrayRestaurants[i].city}</p>
        <p><b>Food Type:</b><br> ${arrayRestaurants[i].food_type}</p>
        <p><b>Phone:</b><br> ${arrayRestaurants[i].number}</p>
        <p><b>Website:</b><br> <a href="${arrayRestaurants[i].website}" class="text-white">${arrayRestaurants[i].website}</a></p>
        <hr>
        </div>
        </div>`) 
    }
};

// Creating a function that prints all Locations inside the div#events
function displayEventsAsc(){
    var arrayEvents = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="event") {
            arrayEvents.push(array[index]);
        }   
    }
    arrayEvents.sort(compared);
    
    for (let i = 0; i < arrayEvents.length; i++) {
    $("#events").append(`<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="${arrayEvents[i].website}">
        <img class="d-sm-none d-md-block" src="${arrayEvents[i].img}" alt="${arrayEvents[i].name}"></a>
        <p class="text-white"><i class="far fa-eye text-white"></i> ${arrayEvents[i].visited}</p>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-white">
        <h4 class="h4">${arrayEvents[i].name}</h4>
        <p><b>Address:</b><br> ${arrayEvents[i].address}, <br>${arrayEvents[i].zip_code} ${arrayEvents[i].city}</p>
        <p><b>When:</b><br> ${arrayEvents[i].date}, ${arrayEvents[i].time}</p>
        <p><b>How much:</b><br> ${arrayEvents[i].entry}</p>
        <p><b>Website:</b><br><a href="${arrayEvents[i].website}" class="text-white">${arrayEvents[i].website}</a></p>
        <hr>
        </div>
        </div>`
    )
    };
};

// creating Locations
array.push(new Locations("St. Charles Church","Vienna","1010","Karlsplatz 1","img/st_charles_church.jpg","place","2004-04-28 "));
array.push(new Locations("Schönbrunn Park","Vienna","1130","Maxingstraße 13b","img/schoenbrunn.jpg","place","2012-05-22"));
array.push(new Locations("Prater","Vienna","1020","Riesenradplatz 2","img/prater.jpg","place","2005-05-01"));

// creating Restaurants
array.push(new Restaurants("ON","Vienna","1050","Wehrgasse 8","img/on.jpg","restaurant","2019-11-28","chinese","+43(1)5854900","http://www.restaurant-on.at/"));
array.push(new Restaurants("BioFrische","Vienna","1150","Stutterheimstraße 6","img/bio_frische.jpg","restaurant","2019-08-16","indian","+43(1)9529215","https://biofrische.wien/"));
array.push(new Restaurants("Swing Kitchen","Vienna","1070","Schottenfeldgasse 3","img/swing_kitchen.jpg","restaurant","2018-06-12","vegan","no number available","http://swingkitchen.com"));

// creating Events
array.push(new Events("Das Sommerkonzert","Vienna","1010","Musikvereinsplatz 1","img/sommerkonzert.jpg","event","2020-06-19","19. Juni 2020","19:30","€ 150,00","http://musikverein.at"));
array.push(new Events("Das Trojanische Pferd","Vienna","1090","Pozellangasse 19","img/das_trojanische_pferd.jpg","event","2020-06-20","20. Juni 2020","20:00","€ 17,00","http://schauspielhaus.at"));
array.push(new Events("Feel Good Festival 2020","Vienna","1190","Hohe Warte Stadion","img/feel_good.jpg","event","2020-06-28","28. Juni 2020","09:00","€ 29,00","http://feelgood-festival.at/"));


displayPlacesAsc()
displayRestaurantsAsc()
displayEventsAsc()