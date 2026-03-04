
function playmusic() {
    document.getElementById("musik").play();
}
function stopmusic() {
    document.getElementById("musik").pause();
}

let images = ["foto1.jpg","foto2.jpg","foto3.jpg"];

let index = 0;
let home = document.querySelector(".home");

function changeBackground() {
    home.style.backgroundImage = "url('" + images[index] + "')";
    index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 4000);