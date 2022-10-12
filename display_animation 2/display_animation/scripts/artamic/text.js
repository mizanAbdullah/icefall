class Text {
  constructor(ctx, text, x, y, size, fontWeight = "normal", color, fontFamily) {
    this.ctx = ctx;
    this.text = text;
    this.x = x;
    this.y = y;
    this.size = size;
    this.fontWeight = fontWeight;
    this.color = color;
    this.fontFamily = fontFamily;
  }
  draw() {
    this.ctx.font = `${this.fontWeight} ${this.size}pt ${this.fontFamily}`;
    this.ctx.fillStyle =
      typeof this.color !== "undefined" ? this.color : "green";
    this.ctx.fillText(this.text, this.x, this.y);
  }
}

export default Text;
