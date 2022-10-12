

export default class Line{
    constructor(ctx,x1,y1,x2,y2,color){
        this.ctx=ctx;
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
        this.color=color;

    }

    draw(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.x1,this.y1);
        this.ctx.lineTo(this.x2,this.y2)
        this.ctx.strokeStyle=this.color;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    update(){
        console.log("Line update");
    }

}