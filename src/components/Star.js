let layerCount = 5;
let starCount = 400;
let maxTime = 30;
let universal = document.getElementById("root");
let e = document.documentElement;
let g = document.getElementsByTagName("body")[0]
let width = window.innerWidth || e.clientWidth || g.clientWidth;
let height = window.innerHeight || e.clientHeight || g.clientHeight;



for (let i = 0; i < starCount; ++i) {
    let ypos = Math.round(Math.random() * height);
    let star = document.createElement("div");
    let speed = 1000 * (Math.random() * maxTime + 1);
    star.setAttributeattribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
    star.style.backgroundColor = "white";

    universal.appendChild(star);
    star.animate(
        [
            { transform: "translate3d(" + width + "px," + ypos + "px,0)" },
            { transform: "translate3d(-" + Math.random() * 256 + "px," + ypos + "px, 0)" }
        ], {
            delay: Math.random() * -speed,
            duration: speed,
            iterations: 1000

        }

    );

}