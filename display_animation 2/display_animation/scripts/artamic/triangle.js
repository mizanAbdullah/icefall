class Triangle {
  constructor(ctx, x1, y1, x2, y2, x3, y3, fillStyle, strokeStyle, lineWidth) {
    this.ctx = ctx;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
    this.id="triangle";
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.moveTo(this.x1, this.y1);
    this.ctx.lineTo(this.x2, this.y2);
    this.ctx.lineTo(this.x3, this.y3);
    this.ctx.lineTo(this.x1, this.y1);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Triangle;
