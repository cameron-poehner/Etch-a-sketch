// Select the elements on the page 
// Canvas, Shake Button

 const canvas = document.querySelector('#etch-a-sketch');
 const ctx = canvas.getContext('2d');
 const shake = document.querySelector('.shake');

// Setup our Canvas for drawing
const { width, height } = canvas;

const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// Write Draw Function



// Write Handler for our keys


// Clear/Shake Function

// Listen for Arrow Keys
