var Button = document.getElementById("fullscreen");

Button.addEventListener("click", function () {
    document.documentElement.requestFullscreen();
});

function stop() {
    return false;
}

document.oncontextmenu = stop;
document.onselectstart = stop;
