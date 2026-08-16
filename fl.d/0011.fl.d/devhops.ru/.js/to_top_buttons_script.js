"use strict";
console.log("/.js/aside_left_block_script.js is working");

let to_top_buttons_div = document.getElementById("totopbuttons");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled >= 140)
    {
        to_top_buttons_div.style.display = "block";
    }
    else if (scrolled < 140)
    {
        to_top_buttons_div.style.display = "none";
    }
});