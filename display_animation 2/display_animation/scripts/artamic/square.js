
export default class Square{
    constructor(ctx,x,y,arm,strokeColor,fillColor="aliceblue"){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.arm=arm;
        this.color=strokeColor;
        this.fillColor=fillColor;

    }

    draw(){
        

        this.ctx.beginPath();
        this.ctx.fillStyle = this.fillColor;
        this.ctx.strokeStyle = this.color;
        this.ctx.rect(this.x, this.y, this.arm, this.arm);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

    }

    update(){
        console.log("Square update");
    }


    

}