

export default class Line{
    constructor(ctx,x,y,z){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.z=z;

    }

    draw(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.lineTo(this.z,this.y)
        this.ctx.stroke();
        this.ctx.closePath();
    }

}