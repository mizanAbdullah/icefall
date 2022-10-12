
export default class Rect{
    constructor(ctx,x,y,width,height,strokeColor,fillColor="aliceblue"){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=strokeColor;
        this.fillColor=fillColor;
        this.id="rect";
    }

    draw(){

    
        
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fillColor;
        this.ctx.strokeStyle = this.color;
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        
    }

    update(){
        console.log("Rectangle update");
    }

}