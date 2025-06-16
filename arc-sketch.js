import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: [ 1080, 1080 ]
};

// functions-1: converting angles in degress to Radian
const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

// funtion-2 : Random range
const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    

    context.fillStyle = 'black';

    //  APPLYING TRIGONOMETRY TO OUR CIRCLE:
    // 1. rename our x,y to cx,cy => center of x and y
    // 2. add a new variable called radius since we intend to have different radius for our circle
    // 3. declare x and y again
    // 4. set our x,y to cx and cy then apply the sin and cosine to them


    // const x = width * 0.5;
    // const y = height * 0.5;

    const cx     = width  * 0.5;
    const cy     = height * 0.5;
    const w      = width  * 0.01;
    const h      = height * 0.1;
    let x, y;

    const num    = 20;
    const radius = width  * 0.3;

    for (let i = 0; i < num; i++) {
      
      // let's set the number of slices needed
      const slice = degToRad( 360 / num);
      // Set up the actual angle needed
      const angle = slice * i
      
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle)
      // context.scale(Math.random() * (3 - 1) + 1 ,1) // simplified to 👇

      // let's vary the scale of x (1,3) and that of y => ,1 by randomazing the both.
      context.scale(randomRange(0.1, 2), randomRange(0.2, 0.5))
      
  
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h); 
      context.fill();
      context.restore();

      // Let's beging working with arcs
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      // context.lineWidth = '20'

      // lets randomize arc linewidth
      context.lineWidth = randomRange(5, 20);


      context.beginPath();
      // context.arc(0, 0, radius, 0, slice) // this give the a full circle instead of arc
      context.arc(0, 0, radius * randomRange(0.7, 1.3), slice *  randomRange(1, -5) , slice * randomRange(1, 5)); 
      context.strokeStyle = 'black'
      context.stroke();
      context.restore();
    }
   };
};

canvasSketch(sketch, settings);
