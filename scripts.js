document.addEventListener("DOMContentLoaded", function () {
const aboutMeBtn = document.getElementById("aboutMeBtn");
const aboutMeSection = document.getElementById("aboutMeSection");
const closeBtn = document.getElementById("closeBtn");

// Open dropdown
aboutMeBtn.addEventListener("click", function () {
aboutMeSection.style.display = "flex";
});

// Close dropdown
closeBtn.addEventListener("click", function () {
aboutMeSection.style.display = "none";
});

// Close dropdown when clicking outside the content box
aboutMeSection.addEventListener("click", function (event) {
    if (event.target === aboutMeSection) {
        aboutMeSection.style.display = "none";}
    });
});