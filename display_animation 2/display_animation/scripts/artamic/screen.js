import Circle from "./circle.js";
import Rect from "./rect.js";
import Square from "./square.js";
import Line from "./line.js";
// -------------------------------------
import Triangle from "./triangle.js";
import Polygon from "./polygon.js";
import Text from "./text.js";
import Ellipse from "./ellipse.js";



export default class Screen {
  #allObject;
  #undoObject;
  #totalObjectInArray;
  #totalUndo;
  constructor(width, height, borderRadius, logo = null) {
    this.screen = document.getElementById("canvas");
    this.ctx = this.screen.getContext("2d");
    this.screen.width = width * 0.6;
    this.screen.height = height * 0.8;
    this.borderRadius = borderRadius;
    this.logo = logo;
    this.#allObject = [];
    this.#undoObject = [];
    this.#totalObjectInArray=0;
    this.#totalUndo=0;
    this.history;

  }

  show() {
    this.screen.style.border = "1px solid red";
    this.screen.style.borderRadius = this.borderRadius + "px";
  }
  clear() {
    this.ctx.clearRect(0, 0, this.screen.width, this.screen.height)
  }


  store(obj) {
    if(this.totalObejct()===0){
      this.#allObject.push(obj);
      this.history= new DoublyLinkedList(obj);
      console.log(this.history);

    }
    else{
      this.#allObject.push(obj);
      this.history.append(obj);
      console.log(this.history);
    }


  }

  remove(index) { 
    if(index>-1){
      this.#allObject.splice(index,1); 
      console.log(index);

    }
}

  // draw all from  allObject Array
  allDraw() {
    if (this.#allObject.length > 0) {
      this.#allObject.forEach(item => {
        this.draw(item);
      });
    }
    else {
      return;
    }
  }


data(){
  return this.ctx.getImageData(0, 0, this.screen.width, this.screen.height);
}
saveMemento() {
  this.#undoObject.push(this.#allObject);
}



  undo() {
    
    this.#totalObjectInArray=this.totalObejct();
    if(this.#totalObjectInArray>0){
      this.#undoObject.push(this.#allObject[this.#totalObjectInArray - 1]);
      this.#allObject.pop();
    }
    else{
      return;
    }
  }
  redo() {
    this.#totalUndo=this.totalUndoObejct();
    if(this.#totalUndo>0){
      this.#allObject.push(this.#undoObject[this.#totalUndo - 1]);
      this.#undoObject.pop();
    }
    else{
      return;
    }
  }
  totalObejct() {
    return this.#allObject.length;

  }
  totalUndoObejct() {
    return this.#undoObject.length;

  }

  findShape(currentShapeIndex){
    return this.#allObject[currentShapeIndex];
  }

  draw(obj) {
    obj.draw();
  }


  update(obj) {
    obj.update();
  }


  createCircle(x, y, radius, cStrokeColor, fillColor) {
    const obj = new Circle(this.ctx, x, y, radius, cStrokeColor, fillColor);
    return obj;
  }

  createSquare(x, y, arm, strokeColor, fillColor) {
    const obj = new Square(this.ctx, x, y, arm, strokeColor, fillColor);
    return obj;
  }

  createRect(x, y, height, width, strokeColor, fillColor) {
    const obj = new Rect(this.ctx, x, y, height, width, strokeColor, fillColor);
    return obj;
  }

  createLine(x1, y1, x2, y2, strokeColor) {
    const obj = new Line(this.ctx, x1, y1, x2, y2, strokeColor);
    return obj;
  }

  // -------------------------------------
  createTriangle(x1, y1, x2, y2, x3, y3, fillStyle, strokeStyle, lineWidth) {
    const obj = new Triangle(
      this.ctx,
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      fillStyle,
      strokeStyle,
      lineWidth
    );
    return obj;
  }


  createEllipse(x, y, width, height, fillStyle, strokeStyle, lineWidth) {
    const obj = new Ellipse(
      this.ctx,
      x,
      y,
      width,
      height,
      fillStyle,
      strokeStyle,
      lineWidth
    );
    return obj;
  }


  createPolygon(n, size, x, y, fillStyle, strokeStyle, lineWidth) {
    const obj = new Polygon(
      this.ctx,
      n,
      size,
      x,
      y,
      fillStyle,
      strokeStyle,
      lineWidth
    );
    return obj;
  }

  createText(text, x, y, size, fontWeight, fillStyle, fontFamily) {
    const obj = new Text(
      this.ctx,
      text,
      x,
      y,
      size,
      fontWeight,
      fillStyle,
      fontFamily
    );
    return obj;
  }

  randomBetweenTwo(min, max) {
    //this will give random number between min and max
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null,
          previous: null
      };
      this.length = 1;
      this.tail = this.head;
  }

  
  // Insert node at end of the list
  append(value) {
      let newNode = new Node(value);

      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;

      this.length++;
  }

  // Insert node at the start of the list
  prepend(value) {
      let newNode = new Node(value);

      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;

      this.length++;
  }

  // Insert node at a given index
  insert (index, value) {
      if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
          return this;
      }

      // If index is 0, prepend
      if (index === 0) {
          this.prepend(value);
          return this;
      }

      // If index is equal to this.length, append
      if (index === this.length) {
          this.append(value);
          return this;
      }

      // Reach the node at that index
      let newNode = new Node(value);
      let previousNode = this.head;

      for (let k = 0; k < index - 1; k++) {
          previousNode = previousNode.next;
      }

      let nextNode = previousNode.next;
      
      newNode.next = nextNode;
      previousNode.next = newNode;
      newNode.previous = previousNode;
      nextNode.previous = newNode;

      this.length++;
  }

  // Remove a node
  remove (index) {
      if (!Number.isInteger(index) || index < 0 || index > this.length) {
          console.log(`Invalid index. Current length is ${this.length}.`);
          return this;
      }

      // Remove head
      if (index === 0) {
          this.head = this.head.next;
          this.head.previous = null;

          this.length--;
          return this;
      }

      // Remove tail
      if (index === this.length - 1) {
          this.tail = this.tail.previous;
          this.tail.next = null;

          this.length--;
          return this;
      }

      // Remove node at an index
      let previousNode = this.head;

      for (let k = 0; k < index - 1; k++) {
          previousNode = previousNode.next;
      }
      let deleteNode = previousNode.next;
      let nextNode = deleteNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;

      this.length--;
      return this;
  }






}