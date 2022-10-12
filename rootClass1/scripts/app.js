import Screen from "./screen.js";
const screen = new Screen(1000, 600, 50);
screen.show();
console.log(screen);

let allObj = [];


allObj.push(screen.createLine(100, 100, 200, 200, "lightblue"));

allObj.push(screen.createCircle(100, 200, 20, "lightgreen"));

allObj.push(screen.createRect(300, 200, 200, 100, "lightcoral"));

allObj.push(screen.createSquare(200, 20, 50, "blue"));

allObj.push(screen.createCircle(30, 400, 20, "green"))

allObj.push(screen.createSquare(100, 30, 50, "red"));

allObj.push(screen.createRect(400, 400, 100, 50));



setInterval(() => {
  allObj.forEach(item => {
    screen.update(item);
    screen.draw(item);

  });

}, 1000);