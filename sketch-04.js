import canvasSketch from "canvas-sketch";
import random from 'canvas-sketch-util/random';
import mapRange  from 'canvas-sketch-util/math';
import {Pane} from 'tweakpane';

const settings = {
  dimensions: [1080, 1080],
  animate: true,
};

// const params = {
//   cols: 10,
//   rows: 10,
// };

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 10;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols; //returns the remainder of cols by

      // math.floor rounds up the number ot the nearest integer
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;

      // drawing a line inside each cell
      const w = cellw * 0.8;
      const h = cellh * 0.8;

      const n = random.noise2D(x + frame * 20, y + frame * 10, 0.001);
      const angle = n * Math.PI * 0.2; // 0 to 2pi 

      const scale = (n * 0.5 + 0.5) * 30;
      // const scale = (n + 1) /2 * 30; //another way to scale the line width
      // const scale = mapRange(n, -1, 1, 0, 30); //another way to scale the line width 
      // const scale = mapRange(n, -1, 1, 0, 30); //another way to scale the line width 

      // lets draw

      context.strokeStyle = "white";
      context.lineWidth = scale;

      context.save();
      context.translate(x, y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh * 0.5);

      // rotate the line by  angle n 
      context.rotate(angle);

      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.stroke();

      context.restore();
    }
  };

  const createPane = () => {
    const pane = new Pane();
    let folder;

    folder = pane.addFolder({ title: 'Grid', expanded: true });
      folder.addInput(params, 'cols', { min: 2, max: 50, step: 1 });
      folder.addInput(params, 'rows', { min: 2, max: 50, step: 1 });
  }
};

createPane();
canvasSketch(sketch, settings);



// noise libraries:

// control panels and sliders
