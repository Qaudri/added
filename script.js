let openButton = document.getElementById("menuBtn");
let closeButton = document.getElementById("closeBtn");
let menuItems = document.getElementById("menu");
let menuCTA = document.getElementById("menuCTA");


openButton.addEventListener("click", open);
closeButton.addEventListener("click", close);

function open() {
    openButton.style.display = "none";
    closeButton.style.display = "block";
    menuItems.style.display = "block";
    menuCTA.style.display = "block";
}

function close() {
    openButton.style.display = "block";
    closeButton.style.display = "none";
    menuItems.style.display = "none";
    menuCTA.style.display = "none";
}


let servicesListItems = document.getElementById("servicesList");
let servicesUpBtn = document.getElementById("servicesUp");
let servicesDownBtn = document.getElementById("servicesDown");

servicesDownBtn.addEventListener("click", openServices);
servicesUpBtn.addEventListener("click", closeServices)

function openServices() {
    servicesListItems.style.display = "grid";
    servicesUpBtn.style.display = "block";
    servicesDownBtn.style.display = "none";
}

function closeServices() {
    servicesListItems.style.display = "none";
    servicesUpBtn.style.display = "none";
    servicesDownBtn.style.display = "block";
}