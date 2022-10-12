
export default class Rect{
    constructor(ctx,x,y,width,height,color="black"){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=color;

    }

    draw(){
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.lineTo(this.x,this.y+this.height);
        this.ctx.lineTo(this.x+this.width,this.y+this.height);
        this.ctx.lineTo(this.x+this.width,this.y);
        this.ctx.lineTo(this.x,this.y);
        this.ctx.fillStyle=this.color;
        this.ctx.fill();
        this.ctx.strokeStyle="black";
        this.ctx.stroke();
        this.ctx.closePath();
        // this.ctx.fillRect(this.x,this.y,this.height,this.width);
        // this.ctx.fillStyle=this.color; 
        // this.ctx.fill();
        // this.ctx.stroke();
        
    }

    update(){
        console.log("Rectangle update");
    }

}