let reach = document.querySelector("#reach-btn");
let reachModal = document.querySelector("#modal-callback");
let closereach = document.querySelector(".close-btn");

reach.addEventListener('click', function (e) {
    e.preventDefault();
    reachModal.style.top = "0";
    reachModal.style.opacity = "0.95";
});

closereach.addEventListener('click', function () {
    reachModal.style.top = "-150%";
    reachModal.style.opacity = "0";
});

let menuBtn = document.querySelector("#nav-menu");
let menu = document.querySelector("#modal-menu");
let closemenu = document.querySelector("#close-menu");

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.style.top = '0';
});

closemenu.addEventListener('click', function () {
    menu.style.top = '-700px';
});

let nameField = document.querySelector("#text");
let emailField = document.querySelector("#email")
let labelName = document.querySelector(".name-field");
let labelEmail = document.querySelector(".email-field");

nameField.addEventListener("focus", function () {
    labelName.classList.add("isfocus");
});

nameField.addEventListener("blur", function () {
    if (nameField.value === '') {
        labelName.classList.remove("isfocus");
    }
});

emailField.addEventListener("focus", function () {
    labelEmail.classList.add("isfocus");
});

emailField.addEventListener("blur", function () {
    if (emailField.value === '') {
        labelEmail.classList.remove("isfocus");
    }
});

// catalogue nav taps
const navTabs = document.querySelectorAll(".nav-tabs ul li a");
const tapPan = document.querySelectorAll(".tab-pan");
console.log(tapPan);
navTabs.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const tabActive = el.getAttribute('href');
        navTabs.forEach(function (el) {
            el.classList.remove("active");
        });
        tapPan.forEach(function (el) {
            el.style.display = "none";
        });

        this.classList.add("active");
        document.getElementById(tabActive).style.display = "block";
        // console.log(document.getElementById(tabActive));
    });
});


