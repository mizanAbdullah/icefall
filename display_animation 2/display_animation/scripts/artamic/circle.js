export default class Circle{
    constructor(ctx,x,y,radius,strokeColor,fillColor="black"){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.strokeColor=strokeColor;
        this.color=fillColor;
        this.id="circle";
        this.dx=2

    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke()
        this.ctx.closePath();
    }

    update(){
        if(this.x>400 || this.x<0){
            dx=-dx;
        }
        this.x=this.x+dx;
    }

}

