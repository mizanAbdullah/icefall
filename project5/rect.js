
export default class Rect{
    constructor(ctx,x,y,width,height,rectColor){
        this.ctx=ctx;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.rectColor=rectColor;

    }

    draw(){
        this.ctx.fillStyle=this.rectColor;
        this.ctx.rect(this.x,this.y,this.height,this.width);
        this.ctx.fill();
    }

}