// var ol = 0;

// var circleInterval = setInterval(circleAnimation, 10);
// function circleAnimation(){
//     if (ol >= (4000)){
// document.getElementById("circle").style.backgroundColor = "red"
// clearInterval(circleInterval);
//     }else
//     ol++;
//     document.getElementById("circle").style.left = ol + "px"
// }

var ol = 0;
var isPlaying = false;
var circleInterval;

var el = document.getElementById("circle");
var sc = 1;

function circleAnimation(time) {
    ol++;
    sc++;
    el.style.left = ol + "px";
    el.style.width = sc + "px";
    el.style.height = sc + "px";
    el.style.borderRadius = sc*100 + "px";
    circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked(){
    if(isPlaying){
        isPlaying = false;
        document.getElementById("circle").style.backgroundColor = "dimgrey";
        cancelAnimationFrame(circleInterval);
    }else{
        isPlaying = true;
        document.getElementById("circle").style.backgroundColor = "crimson";
        circleInterval = requestAnimationFrame(circleAnimation);
    }
}

document.getElementById("circle").addEventListener("click", mouseClicked);
document.getElementById("circle").style.backgroundColor = "dimgrey";