"use strict";
console.log("www.devhops.ru/.js/advert_one_script.js is working");


let remove_advert_one_button  = document.getElementById("remove_advert_one_button");
let show_advert_one_button    = document.getElementById("show_advert_one_button");
let advert_one_ads        = document.getElementById("advert_one_ads");


remove_advert_one_button.addEventListener("click", () => {
    console.log("remove_advert_one_button clicked");
    show_advert_one_button.style.display = "block";
    remove_advert_one_button.style.display = "none";
    advert_one_ads.style.display = "none";
});


show_advert_one_button.addEventListener("click", () => {
    console.log("show_advert_one_button clicked");
    show_advert_one_button.style.display = "none";
    remove_advert_one_button.style.display = "block";
    advert_one_ads.style.display = "block";
});
