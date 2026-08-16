"use strict";
console.log("www.devhops.ru/.js/advert_two_script.js is working");


let remove_advert_two_button  = document.getElementById("remove_advert_two_button");
let show_advert_two_button    = document.getElementById("show_advert_two_button");
let advert_two_ads        = document.getElementById("advert_two_ads");


remove_advert_two_button.addEventListener("click", () => {
    console.log("remove_advert_two_button clicked");
    show_advert_two_button.style.display = "block";
    remove_advert_two_button.style.display = "none";
    advert_two_ads.style.display = "none";
});


show_advert_two_button.addEventListener("click", () => {
    console.log("show_advert_two_button clicked");
    show_advert_two_button.style.display = "none";
    remove_advert_two_button.style.display = "block";
    advert_two_ads.style.display = "block";
});


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
};


function hideAllButOne(arr, previous, timeout) {
    console.log("arr");
    console.log(arr);
    console.log("/arr");
    let randInt = getRandomInt(0, arr.length);
    
    if (previous !== -1 && previous !== randInt) {
        arr[randInt].style.display = "inline";
        arr[previous].style.display = "none";
    }
    else if (previous === -1) {    
        arr.forEach(function(item, index) {
            item.style.display = "none";
        });
        arr[randInt].style.display = "inline";
    }
 
    let t = setTimeout(hideAllButOne, timeout, arr, randInt, timeout);
}


const elements2 = [].slice.call(document.getElementsByClassName("BlinkingBanner"));
setTimeout(hideAllButOne, 0, elements2, -1, 20000);
