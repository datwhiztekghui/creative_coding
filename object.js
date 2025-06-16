import canvasSketch from "canvas-sketch";
import random from 'canvas-sketch-util/random';
import math from 'canvas-sketch-util/math';

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = ({ context, width, height }) => {

  const agents = [];
  
  for (let i = 0; i < 40; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push( new Agent(x,y));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];

        context.strokeStyle = 'white';
        const dist = agent.pos.getDistance(other.pos);

  

        if (dist > 200) continue;

        context.lineWidth = math.mapRange(dist, 0, 200, 5, 0);
        
        context.beginPath();
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
        
      }
    }

    agents.forEach(agent => {
      agent.bounce(width, height);
      agent.update();
      agent.draw(context);
    });
    // const x = width;
    // const y = height;

    // LEARNING ABOUT OBJECTS:
    /*
    1. context an example of object ->
       it has properties like:
       -> context.fillStyle = 'red' and
      methods: 
       -> context.StrokeRect(...)

      Another example of object is 

       -> settings: an object with single property called dimensions.
       -> it is an object because it starts and ends with {} and inside of it there's a key and value

    Arrays use [] brackets and each items is separated using a comma

    Object is written in a similar way. its property name or key, then colon and the value

    const vector = {x: 800, y: 400}

    -> To draw this as a single path  using canvas

    context.beginPath();
    context.arc(vector.x, vector.y, 10, 0, Math.PI *2)
    context.fillStyle = 'black'
    context.fill(); 
    
    */ 



  // dimension is an object b/c it starts and end with []

  // const agentA = new Agent(800, 400)
  // const agentB = new Agent(800, 400)

  // agentA.draw(context);
  // agentB.draw(context);
  };
};

canvasSketch(sketch, settings);

class Vector {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(vector) {
    const dx = this.x - vector.x;
    const dy = this.y - vector.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  constructor (x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = 5;
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) 
      this.vel.x *= -1;
    
    if (this.pos.y <= 0 || this.pos.y >= height) 
      this.vel.y *= -1;
    
  }


  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.strokeStyle = 'white';
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.rotate(Math.PI * 2);

    context.lineWidth = 2;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI *2)
    context.stroke();

    context.restore();
  }

  // connecting our agents with lines.


}

