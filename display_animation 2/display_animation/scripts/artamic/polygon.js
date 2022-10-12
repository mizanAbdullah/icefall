class Polygon {
  constructor(
    ctx,
    numberOfSides,
    size,
    centerX,
    centerY,
    fillStyle,
    strokeStyle,
    lineWidth
  ) {
    this.ctx = ctx;
    this.numberOfSides = numberOfSides;
    this.size = size;
    this.centerX = centerX;
    this.centerY = centerY;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.centerX + this.size * Math.cos(0),
      this.centerY + this.size * Math.sin(0)
    );

    for (let i = 1; i <= this.numberOfSides; i += 1) {
      this.ctx.lineTo(
        this.centerX +
          this.size * Math.cos((i * 2 * Math.PI) / this.numberOfSides),
        this.centerY +
          this.size * Math.sin((i * 2 * Math.PI) / this.numberOfSides)
      );
    }
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Polygon;
