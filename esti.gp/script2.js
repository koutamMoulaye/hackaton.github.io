var audio=document.createElement('audio');
var first=true;
window.addEventListener('mousedown',onmousedown);

function onmousedown(){
    if(!first) return;
    first=false;
    audio.src="audiocours2.mp3";
    //audio.controls=true;
    audio.play();
}
