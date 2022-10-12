import Circle from "./circle.js";
import Rect from "./rect.js";
import Square from "./square.js";
import Line from "./line.js";

const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

canvas.width=800;
canvas.height=600;



const circle1=new Circle(ctx,100,100,20,"green");
const rect1=new Rect(ctx,200,200,200,100,"red");
const square1=new Square(ctx,410,410,100,"lightcoral");
const line1=new Line(ctx,400,100,200);

let allObject=[circle1,rect1,square1,line1]

allObject.forEach(e =>{
    console.log(e);
    e.draw();
})





