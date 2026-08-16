"use strict";
console.log("/.js/aside_left_block_script.js is working");

let aside_left_block_div = document.getElementById("aside_left_block");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled >= 120)
    {
        aside_left_block_div.style.position = "fixed";
        aside_left_block_div.style.top = "60px";
    }
    else if (scrolled < 120)
    {
        aside_left_block_div.style.position = "absolute";
        aside_left_block_div.style.top = "180px";
    }
});