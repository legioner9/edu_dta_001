"use strict";
console.log("/.js/breadcrumbs_script.js is working");

let breadcrumbs_nav = document.getElementById("breadcrumbs");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled >= 120)
    {
        breadcrumbs_nav.style.position = "fixed";
        breadcrumbs_nav.style.top = "0";
    }
    else if (scrolled < 120)
    {
        breadcrumbs_nav.style.position = "absolute";
        breadcrumbs_nav.style.top = "120px";
    }
});