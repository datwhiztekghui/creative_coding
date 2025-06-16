import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.strokeRect(100, 100,  width - 200, height - 200);
    


    context.save();
    context.arc(width * 0.5, height * 0.5, 200, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.lineWidth = 4;
    context.stroke();
    context.fillStyle = 'orange';
    context.fill();
    context.restore();

    context.save();
    context.translate(width * 0.5, height * 0.5);
    context.beginPath();
    context.arc(0, 0, 150, 0, Math.PI * 2);
    context.rotate(Math.PI * 2);
    context.fillStyle = 'white';
    context.fill();
    context.restore();


  } 

}

canvasSketch(sketch, settings);