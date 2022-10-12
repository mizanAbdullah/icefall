class Ellipse {
  constructor(ctx, x, y, width, height, fillStyle, strokeStyle, lineWidth) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.x,
      this.y,
      this.width,
      this.height,
      0,
      0,
      2 * Math.PI
    );
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Ellipse;
