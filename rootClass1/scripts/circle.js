export default class Circle{
    constructor(ctx,x,y,radius,color){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;

    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        this.ctx.fillStyle=this.color;
        this.ctx.fill();
        this.ctx.strokeStyle="black";
        this.ctx.stroke();
        this.ctx.closePath();
    }

    update(){
        console.log("Circle update");
    }

}