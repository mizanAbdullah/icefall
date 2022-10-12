import Circle from "./circle.js";
import Rect from "./rect.js";
import Square from "./square.js";
import Line from "./line.js"; 

export default class Screen {
  constructor(width, height, borderRadius, logo = null) {
    this.screen = document.createElement("canvas");
    this.ctx = this.screen.getContext("2d");
    this.screen.width = width;
    this.screen.height = height;
    this.borderRadius = borderRadius;
    this.logo = logo;
  }

  show() {
    const root = document.getElementById("root");
    root.appendChild(this.screen);
    this.screen.style.border = "1px solid red";
    this.screen.style.borderRadius = this.borderRadius + "px";
  }

  draw(obj){
    obj.draw();

  }

  update(obj){
    obj.update();
  }

  createCircle(x,y,radius,circleColor){
    const obj=new Circle(this.ctx,x,y,radius,circleColor);
    return obj;
  }

  createSquare(x,y,arm,sqrColor){
    const obj=new Square(this.ctx,x,y,arm,sqrColor);
    return obj;

  }


  createRect(x,y,height,width,rectColor){
    const obj=new Rect(this.ctx,x,y,height,width,rectColor);
    return obj;

  }

  createLine(x1,y1,x2,y2,lineColor){
    const obj=new Line(this.ctx,x1,y1,x2,y2,lineColor);
    return obj;

  }

}


