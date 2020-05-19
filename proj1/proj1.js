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
var isPlaying = false
var circleInterval;

function circleAnimation(time){
    ol++;
    document.getElementById("dog").style.left = ol + "px"
    if(time < 8000 ){
        circleInterval = requestAnimationFrame(circleAnimation);

function mouseClicked(){
    if(isPlaying){
        isPlaying = false;
        document.getElementById("dog").style.backgroundColor = "green"
    cancelAnimationFrame(circleInterval);
    }else{
        isPlaying = true;
        document.getElementById("dog").style.backgroundColor = "orange"
    cancelAnimationFrame(circleInterval);
    }
}


document.getElementById("dog").addEventListener("click",mouseClicked)