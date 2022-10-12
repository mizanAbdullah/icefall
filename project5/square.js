
export default class Square{
    constructor(ctx,x,y,arm,squareColor){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.arm=arm;
        this.squareColor=squareColor;

    }

    draw(){
        this.ctx.fillStyle=this.squareColor;
        this.ctx.rect(this.x,this.y,this.arm,this.arm);
        this.ctx.fill();
    }

}