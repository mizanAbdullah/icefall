
export default class Square{
    constructor(ctx,x,y,arm,color){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.arm=arm;
        this.color=color;

    }

    draw(){
        

        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.lineTo(this.x,this.y+this.arm);
        this.ctx.lineTo(this.x+this.arm,this.y+this.arm);
        this.ctx.lineTo(this.x+this.arm,this.y);
        this.ctx.lineTo(this.x,this.y);
        this.ctx.fillStyle=this.color;
        this.ctx.fill();
        this.ctx.strokeStyle="black";
        this.ctx.stroke();
        this.ctx.closePath();

    }

    update(){
        console.log("Square update");
    }

}