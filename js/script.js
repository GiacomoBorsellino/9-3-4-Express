// Up button
let up = document.body.getElementsByClassName("up")[0];

window.onscroll = function() {
    if (window.pageYOffset < 400) {
        up.style.display = "none";
    } else {
        up.style.display = "block";
    }
}

function scrolling() {
    window.scrollTo(0, 0);
}
