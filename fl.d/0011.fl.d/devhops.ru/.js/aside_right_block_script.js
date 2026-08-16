"use strict";
console.log("www.devhops.ru/.js/aside_right_block_script.js is working");


let aside_right_block_div = document.getElementById("aside_right_block");


console.log("aside_right_block_div");
console.log(aside_right_block_div);
console.log("/aside_right_block_div");


window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled >= 120)
    {
        aside_right_block_div.style.position = "fixed";
        aside_right_block_div.style.top = "60px";
    }
    else if (scrolled < 120)
    {
        aside_right_block_div.style.position = "absolute";
        aside_right_block_div.style.top = "180px";
    }
});
