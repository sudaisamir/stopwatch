let [seconds,minuts,hours]=[0,0,0];
let displaytime = document.getElementById("displaytime");
let timer = null

function stopwatch(){
    seconds++
    if(seconds == 60){
        seconds = 0;
        minuts++;
    if(minuts == 60){
        minuts = 0;
        hours++;
    }
  }
  let h = hours   <10 ? "0" + hours : hours
  let m = minuts  <10 ? "0" + minuts : minuts
  let s = seconds <10 ? "0" + seconds : seconds




  displaytime.innerHTML=h +":"+ m +":"+ s 
}
function watchstart(){
    if (timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000)
}
function watchstop(){
    clearInterval(timer);

}
function watchreset(){
    clearInterval(timer);
    [seconds,minuts,hours]=[0,0,0];
    displaytime.innerHTML = "00:00:00";
}