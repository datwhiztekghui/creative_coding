import canvasSketch from "canvas-sketch";

const settings = {
    // we can print out this in other dimensions such as A4
    // dimensions: "a4", // w-2480 h-3508
    dimensions: [1080, 1080],
    // pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.lineWidth = 4;
    context.fillRect(0, 0, width, height);

    // context.save()
    // context.arc(width * 0.5, height * 0.5, 100, 0, Math.PI * 2);
    // context.strokeStyle = 'black';
    // context.lineWidth = 4;
    // context.stroke();
    // context.restore()

    // LETS MAKE OUR DIMENSIONS DYNAMIC these are hardcoded dimensions
    // const w = 60;
    // const h = 60;
    // const gap = 20;
    // let x, y;

    // setting the dimensions to be more dynamic 
    const w   = width  * 0.10
    const h   = height * 0.10
    const gap = width  * 0.03 
    const ix  = width  * 0.17
    const iy  = height * 0.17
    let   x, y;
    // OFFSET VALUES

    const off = width * 0.02
    context.lineWidth = width * 0.01


    // WE NEED TO MODIFY OUR HARDCODED INITIAL VALUES OF X AND Y : 100

    // for (let i = 0; i < 5; i++) {
    //   for (let j = 0; j < 5 ; j++) {
    //     x = 100 + (w + gap) * i;
    //     y = 100 + (w + gap) * j;

    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5 ; j++) {
          x = ix + (w + gap) * i;
          y = iy + (w + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = "grey";
        context.stroke();

        

        // draw a another in the center of the rectangle ---- offset-1
        context.beginPath();
        context.rect(x + off*2, y + off*2, w - off/2, h - off/2);
        context.strokeStyle = 'grey';
        context.stroke();


        // offset -2
        context.beginPath();
        context.rect(x + off, y + off, w - off*2, h - off*2);
        context.strokeStyle = 'grey';
        context.stroke();

        // offset-3
        // context.beginPath();
        // context.rect(x + off*2, y + off*2, w - off/4, h - off/4);
        // context.strokeStyle = 'white';
        // context.stroke();



        // if we don't want all the small squares to appear inside the big square, we can use the following code
        // this is where conditional statements come in.
        // we want to draw the small squares only if i >0 but <4
        // also randomize where the small squares is drawn
        
        // if (Math.random() > 0.5) {
        //   context.save()
        //   context.beginPath();
        //   context.rect(x + 8, y + 8, w - 16, w - 16);
        //   context.strokeStyle = "white";
        //   context.stroke();
        //   context.restore()
        // }
        

        if (Math.random() > 0.5) {
            context.save()
            context.beginPath();
            context.rect(x + off/2, y + off/2, w - off, w - off);
            context.strokeStyle = "white";
            context.stroke();
            context.restore()
          }
          

      }
    }
  };
};

canvasSketch(sketch, settings);
