

export default class Circle{
    constructor(ctx,x,y,radius,circleColor){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.circleColor=circleColor;

    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle=this.circleColor;
        this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }

}