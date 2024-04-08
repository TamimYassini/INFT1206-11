// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value


function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class shape {
  constructor(x,y,velX,velY) {
  this.x=x;
  this.y=y;
  this.velX=velX;
  this.velY=velY;
  
  }
}
class Ball extends shape {
  constructor(x, y, velX, velY,exists, color, size) {
    super(x,y,velX,velY);
    this.color = color;
    this.size = size;
    this.exists = exists;
  }
