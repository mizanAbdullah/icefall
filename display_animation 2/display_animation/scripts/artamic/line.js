

export default class Line{
    constructor(ctx,x1,y1,x2,y2,strokeColor="black"){
        this.ctx=ctx;
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
        this.strokeColor=strokeColor;
        this.id="line";

    }

    draw(){
        this.ctx.beginPath();
        this.ctx.strokeStyle=this.color;
        this.ctx.moveTo(this.x1,this.y1);
        this.ctx.lineTo(this.x2,this.y2)
        this.ctx.stroke();
        this.ctx.closePath();
    }

    update(){
        console.log("Line update");
    }

}