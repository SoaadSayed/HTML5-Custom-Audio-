var audio = document.getElementById("audio");
var mainRange  = document.getElementById("main");
var img = document.getElementById("img");

window.addEventListener("load",function(){
    mainRange.max = audio.duration;
})
// window.onload = function() {

//     mainRange.max = audio.duration;
// }
function Play() {

    audio.play();
}

function Pause() {

    audio.pause();
}

function Stop() {

    audio.load(); 
    audio.pause();
}

function Time() {

    mainRange.value = audio.currentTime;
}

function AudioRange() {

    mainRange.value = audio.currentTime;

}


function Run(e) {

    audio.currentTime = e.value;

}

function Volume(e) {

    if(e.value == 0) {

        audio.muted = true;
    
    } else {

        audio.muted = false;
    }
}

function ChangeTrack(i) {

    img.src =  "" + i + ".jpg";
    audio.src = "" + i + ".mp3";
    mainRange.value = audio.duration;
    window.addEventListener("load",function(){
        mainRange.max = audio.duration;
    })
   

}