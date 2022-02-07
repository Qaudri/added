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

const shortProfile = document.getElementById("profile");
const allProfile = document.getElementById("full-profile");
const closeProfile = document.getElementById("closeProfileBtn");

shortProfile.addEventListener("click", displayAll);
closeProfile.addEventListener("click", closeAll);

function displayAll() {
    allProfile.style.display = "block";
}

function closeAll() {
    allProfile.style.display = "none";
}

const solarShortProfile = document.getElementById("solar-profile");
const solarAllProfile = document.getElementById("solar-full-profile");
const solarcloseProfile = document.getElementById("solarCloseProfileBtn");

solarShortProfile.addEventListener("click", sdisplayAll);
solarcloseProfile.addEventListener("click", scloseAll);

function sdisplayAll() {
    solarAllProfile.style.display = "block";
}

function scloseAll() {
    solarAllProfile.style.display = "none";
}
