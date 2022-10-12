const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

const pauseBtn=document.getElementById("pauseBtn");
const playBtn=document.getElementById("playBtn");

canvas.width=500;
canvas.height=400;



canvas.style.border="2px solid green";

let x=100;
let dx=2;
let isPause=false;

let angel=0;

pauseBtn.onclick=pause;
playBtn.onclick=play;


function pause(){
    isPause=true;

}

function play(){
    isPause=false;
    Animation();
}


// function Animation(){

//     if(isPause){
//         return;
//     } 
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.beginPath();
//     ctx.arc(x,100,20,0,2*Math.PI);
//     ctx.stroke();
//     ctx.closePath()

//     if(x>canvas.width || x<0){
//         dx=-dx;
//     }
//     x=x+dx;


//     requestAnimationFrame(Animation);
// }


function Animation(){

    if(isPause){
        return;
    } 
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.rotate(angel);
    ctx.fillRect(x,100,20,20);
    ctx.closePath()
    angel += Math.PI / 180;

    if(x>canvas.width || x<0){
        dx=-dx;
    }
    x=x+dx;


    requestAnimationFrame(Animation);
}



Animation();


