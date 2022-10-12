import Screen from "./artamic/screen.js";
const screen = new Screen(window.innerWidth, window.innerHeight, 20);
screen.show();
const canvas = screen.screen;
const position = canvas.getBoundingClientRect();
console.log(screen);

let drawObject;
let startX;
let startY;
let width;
let height;
let endX;
let endY;
let str = "";
let r;
let textX;
let textY;
let mouseX = 0;
let mouseY = 0;
let startingX = 0;
let write;
let onIcon = "select";
const colors = ["drakred", "lightgreen", "orange", "pink", "yellow", "lightcoral", "aliceblue", "royalblue"];
let pushObject = false;
let drawing = false;
let shapeLeft = null;
let shapeRight = null;
let shapeTop = null;
let shapeBottom = null;
let currentShapeIndex = null;
let currentShape;
let isDrag = false;
let inputTag = document.createElement("input");
let selectObjectNumber = -1;
inputTag.style.position = "absolute";
inputTag.id = "textValue";
inputTag.autocomplete = "off";

// Add active class to the current button (highlight it)
let header = document.getElementById("sideNavbar");
let icon = header.getElementsByClassName("icon");

// draw object

function text(e) {
    if (onIcon === "text") {
        textX = Math.floor(e.pageX - canvas.offsetLeft);
        textY = Math.floor(e.pageY - canvas.offsetTop);
        mouseX = Math.floor(e.pageX - canvas.offsetLeft);
        mouseY = e.pageY - canvas.offsetTop;
        startingX = mouseX;
        return false;
    }

}
//Get Text value
function getValue(e) {

    console.log(e.keyCode);
    if (e.keyCode === 13) {
        screen.clear();
        screen.store(screen.createText(str, textX, textY, 28, "bolder", "darkred", "Times New Roman"));
        screen.allDraw();
        str = "";
    }
    if (e.keyCode === 8) {
        screen.clear();
        str = str.slice(0, str.length - 1)
        screen.draw(screen.createText(str, textX, textY, 28, "bolder", colors[Math.random() * colors.length], "Times New Roman"));
        mouseX -= screen.ctx.measureText(e.key).width
        screen.allDraw();
    }
    if (e.keyCode >= 60 && e.keyCode <= 90 || e.keyCode <= 57 && e.keyCode >= 48 || e.keyCode === 32) {
        write = screen.createText(e.key, mouseX, mouseY, 28, "bolder", colors[Math.random() * colors.length], "Times New Roman");

        mouseX += screen.ctx.measureText(e.key).width;
        // screen.ctx.measureText(e.key).width
        str += write.text;
        screen.draw(write);
        screen.allDraw();
        console.log(write);
    }


    // }

}
let isMouseInShape = (x, y, shape) => {
    console.log(shape.id);
    switch (shape.id) {
        case "rect":
            shapeLeft = shape.x;
            shapeRight = shape.x + shape.width;
            shapeTop = shape.y;
            shapeBottom = shape.y + shape.width;

            if (x >= shapeLeft && x <= shapeRight && y >= shapeTop && y <= shapeBottom) {
                return true;
            }
            break;
        case "circle":
            shapeLeft = shape.x - shape.radius;
            shapeRight = shape.x + shape.radius;
            shapeTop = shape.y - shape.radius;
            shapeBottom = shape.y + shape.radius;

            if (x >= shapeLeft && x <= shapeRight && y >= shapeTop && y <= shapeBottom) {
                return true;
            }
            break;

        case "line":
            shapeLeft = shape.x;
            shapeRight = shape.x1;
            if (shape.y > shape.y1) {
                shapeTop = shape.y1;
                shapeBottom = shape.y;
            }
            else {
                shapeTop = shape.y;
                shapeBottom = shape.y1;
            }

            if (x >= shapeLeft && x <= shapeRight && y >= shapeTop && y <= shapeBottom) {
                return true;
            }
            break;

        case "triangle":
            if (shape.x2 > shape.x3) {
                shapeLeft = shape.x3;
                shapeRight = shape.x2;
            }
            else {
                shapeLeft = shape.x2;
                shapeRight = shape.x3;
            }
            if (shape.y1 > shape.y2) {
                shapeTop = shape.y2;
                shapeBottom = shape.y1;
            }
            else {
                shapeTop = shape.y1;
                shapeBottom = shape.y2;
            }

            if (x >= shapeLeft && x <= shapeRight && y >= shapeTop && y <= shapeBottom) {
                return true;
            }

            break;

        case "text":

            break;

    };
    return false;
};


// let mouseOut = (e) => {
//     e.preventDefault();
//     if (!isDrag) {
//         return;
//     }
//     isDrag = false;
// };

function mouseDown(e) {
    e.preventDefault();
    if (onIcon === "select") {
        dragStar(e);
    }
    else {
        startDrawing(e);
    }

}
function mouseMove(e) {
    e.preventDefault();
    if (onIcon === "select") {
        drag(e);
    }
    else {
        continueDrawing(e)
    }
}
function mouseUp(e) {
    e.preventDefault();
    if (onIcon === "select") {
        dragStop(e);
    }
    else {
        endDrawing(e);
    }

}
function dragStar(e) {
    e.preventDefault();
    startX = parseInt(e.offsetX);
    startY = parseInt(e.offsetY);
    let len = screen.totalObejct();
    for (let i = len - 1; i >= 0; i--) {
        let shape = screen.findShape(i);
        console.log(shape);
        console.log("hello");
        if (isMouseInShape(startX, startY, shape)) {
            currentShapeIndex = i;
            selectObjectNumber = currentShapeIndex;
            console.log(currentShapeIndex);
            isDrag = true;
            return;
        }
    }
}

function drag(e) {
    if (!isDrag) {
        return;
    } else {
        mouseX = parseInt(e.offsetX);
        mouseY = parseInt(e.offsetY);
        let shape = screen.findShape(currentShapeIndex);
        let dx = mouseX - startX;
        let dy = mouseY - startY;
        currentShape = shape;
        if (currentShape.id === "triangle") {
            currentShape.x1 += dx;
            currentShape.y1 += dy;
            currentShape.x2 += dx;
            currentShape.y2 += dy;
            currentShape.x3 += dx;
            currentShape.y3 += dy;
            screen.clear();
            screen.allDraw();
            startX = mouseX;
            startY = mouseY;

        }

        if (currentShape.id === "line") {
            currentShape.x += dx;
            currentShape.y += dy;
            currentShape.x1 += dx;
            currentShape.y1 += dy;
            console.log(currentShape.x1, currentShape.y1);
            screen.clear();
            screen.allDraw();
            startX = mouseX;
            startY = mouseY;

        }

        else {
            currentShape.x += dx;
            currentShape.y += dy;
            screen.clear();
            screen.allDraw();
            startX = mouseX;
            startY = mouseY;
        }

    }

}

function dragStop(e) {
    e.preventDefault();
    if (!isDrag) {
        return;
    }
    screen.history.prepend(currentShape);
    isDrag = false;

}

function startDrawing(e) {

    e.preventDefault();

    drawing = true;

    startX = Math.floor(e.offsetX);
    startY = Math.floor(e.offsetY);
    console.log(startX, startY);
}

function continueDrawing(e) {
    e.preventDefault();
    pushObject = true;
    if (!drawing) {
        pushObject = false;
        return;
    }

    screen.clear();
    screen.allDraw();
    switch (onIcon) {
        case "select":
            pushObject = false;
            screen.allDraw();
            break;

        case "circle":
            screen.allDraw();
            r = Math.floor(Math.sqrt(Math.pow(parseInt(startX - e.offsetX), 2) + Math.pow(parseInt(startY - e.offsetY), 2)));
            drawObject = screen.createCircle(startX, startY, r, "black", colors[Math.floor(Math.random() * colors.length)]);
            screen.draw(drawObject);
            break;

        case "rectangle":
            screen.allDraw();
            width = e.offsetX - startX; // ending x position - start x position
            height = e.offsetY - startY// ending y position - start y position
            drawObject = screen.createRect(startX, startY, width, height, "black", colors[Math.floor(Math.random() * colors.length)]);
            screen.draw(drawObject);
            break;

        case "line":
            screen.clear();
            screen.allDraw();
            console.log(`x1: ${e.offsetX}`);
            endX = e.offsetX;
            endY = e.offsetY;
            drawObject = screen.createLine(startX, startY, endX, endY);
            screen.draw(drawObject);
            break;

        case "triangle":
            screen.clear();
            screen.allDraw();
            drawObject = screen.createTriangle(startX, startY, e.offsetX, e.offsetY, startX * 2 - e.offsetX, e.offsetY, "lightgreen", "black", 2);
            screen.draw(drawObject);
            break;
        case "e":
            screen.clear();
            screen.ctx.globalCompositeOperation = "destination-out";
            ctx.arc(e.offsetX, e.offsetY, 8, 0, Math.PI * 2, false);
            ctx.fill();
            break;
    }

}



function endDrawing(e) {
    e.preventDefault();
    drawing = false;
    if (pushObject) {
        screen.store(drawObject);
        screen.saveMemento();
    }
    screen.allDraw();

}


// const mementos = []
// const input = document.querySelector('input')

// function saveMemento() {
//   mementos.push(input.value)
// }

// function undo() {
//   const lastMemento = mementos.pop()

//   input.value = lastMemento ? lastMemento : input.value
// }

function undo() {
    screen.undo();
    screen.clear();
    screen.allDraw();
}
function redo() {
    screen.redo();
    screen.clear();
    screen.allDraw();
}
function remove() {
    screen.remove(selectObjectNumber);
    selectObjectNumber = -1;
    screen.clear();
    screen.allDraw();
}

// function animationStart(e){
//     if (player.style.display==="none") {
//         player.style.display = "inline-block";

//     }
//     else {
//         player.style.display = "none";
//     }
// }
const play = document.getElementById("play");
const player = document.getElementById("animation-player");
screen.screen.onmousedown = mouseDown;
screen.screen.onmousemove = mouseMove;
screen.screen.onmouseup = mouseUp;
canvas.onclick = text;
window.onkeydown = getValue;
play.onclick = animationStart;
document.getElementById("undo").onclick = undo;
document.getElementById("redo").onclick = redo;
document.getElementById("trash").onclick = remove;
console.log(icon);

for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        console.log(current[0]);
        current[0].className = current[0].className.replace(" active", "");
        onIcon = this.name;
        console.log(onIcon);
        this.className += " active";

    });
}



let color = ["green", "black", "red", "yellow", "blue", "orange", "olive", "purple", "indigo", "violet", "lavender", "grey"];
const allSpanDiv = document.querySelectorAll(".color");
const colorDiv = document.getElementById("colorDiv");
console.log(allSpanDiv);
for (let i = 0; i < allSpanDiv.length; i = i + 1) {
    allSpanDiv[i].style.backgroundColor = color[i];
}

const fillColor = document.getElementById("fill");
fillColor.onclick = onDisplay;
function onDisplay() {

    if (colorDiv.style.display === "inline-block") {
        colorDiv.style.display = "none";

    }
    else {
        colorDiv.style.display = "inline-block";
    }

}
const slider = document.getElementById("timeFlow");
const min = slider.min;
const max = slider.max;
const value = slider.value;
console.log(slider.style.background);

slider.style.background = `linear-gradient(to right, red 0%, red ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`;

slider.oninput = function () {
    this.style.background = `linear-gradient(to right, red 0%, red ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`;
};
const output = document.getElementById("output");
const ctx = output.getContext("2d");
output.width = 1400;
output.height = 800;

let x=0;
let y=0;


const pauseImg=document.getElementById("pauseImg");
const playImg=document.getElementById("playImg");
const closeButton=document.getElementById("closeButton");
let isPause=false;


// pauseButton.onclick=pause;
pauseImg.onclick=pause;
playImg.onclick=playAnimation;
closeButton.onclick=closeAnimation;

// var path = new Path2D('M 100,100 h 50 v 50 h 50');
// ctx.stroke(path);


function animationStart(e) {
    if (player.style.display === "none") {
        // player.className += " animation";
        player.style.animation="bounch 2s linear 1";
        player.style.display = "inline-block";
        setTimeout(()=>{
            animation();
        },3000);
        

    }
    else {
        player.style.display = "none";
    }
}

function pause(){
    isPause=true;
}

function playAnimation(){
    isPause=false;
    animation();
}


function closeAnimation(){
    player.style.display ="none";
    x=0;
    isPause=true;
}

function animation() {

    if(isPause){
        return
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const getDate = screen.data();
    ctx.putImageData(getDate, x, y);

    x++;
    y=screen.randomBetweenTwo(0,100);
    requestAnimationFrame(animation);   

}






