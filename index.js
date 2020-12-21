// Select the elements on the page 
// Canvas, Shake Button

 const canvas = document.querySelector('#etch-a-sketch');
 const ctx = canvas.getContext('2d');
 const shake = document.querySelector('.shake');
 const MOVE_AMOUNT = 10;

 
// Setup our Canvas for drawing
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// Write Draw Function

function draw({ key }) {
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch(key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default : 
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write Handler for our keys
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
        console.log(e.key);
        console.log('handled!');
    }
}

// Clear/Shake Function

// Listen for Arrow Keys
window.addEventListener('keydown', handleKey);