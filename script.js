let timer=6;
var score=0;
var hitRun;
function createBubble(){
    var bubbles="";
for (let i = 1; i <=102; i++) {
    let run= Math.floor(Math.random()*10);
    bubbles += `<div class="bubble">${run}</div>`;
    
}
document.querySelector("#pbtm").innerHTML= bubbles
}


function timeRunner(){
    let timerNew =setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent= timer;
        }
        else{
            clearInterval(timerNew);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }    
    },1000)
}
function hitGenerator(){
    hitRun=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitRun;
}
function scoreCalc(){
    
    document.querySelector("#scrval").textContent=score;
    score+=10;
}
document.querySelector("#pbtm").addEventListener("click", function(data){
    clickNum= Number(data.target.textContent);
    if(clickNum===hitRun){
        scoreCalc();
        createBubble();
        hitGenerator();
    }

})
scoreCalc();
hitGenerator();
timeRunner();
createBubble();
