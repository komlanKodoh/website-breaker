import { Composite, Mouse, MouseConstraint, Runner } from "matter-js";
import Renderer from "./Renderer";
import * as utils from "./utils";

let canvas = document.createElement("canvas");
canvas.style.width = "100vw";
canvas.style.height = "100vh";

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.right = "0";

let ctx = canvas.getContext("2d");

export const breakWebPage = async () => {
  if (!ctx) {
    throw new Error("canvas context is not supported ");
  }

  const width = Math.ceil(window.innerWidth);
  const height = Math.ceil(window.innerHeight);

  canvas.width = width;
  canvas.height = height;

  document.body?.appendChild(canvas);

  let _image = await utils.getScreenShot();

  let image = document.createElement("canvas");

  image.width = width;
  image.height = height;

  image.getContext("2d")?.drawImage(_image, 0, 0, width, height);

  let { engine, rows, columns } = utils.createStackEngine(width, height);

  let slots: Matter.Body[][] = [];
  let bodies = engine.world.composites[0].bodies;

  for (let row = 0; row < rows; row++) {
    let slotRow: Matter.Body[] = [];
    slots.push(slotRow);

    for (let column = 0; column < columns; column++) {
      slotRow.push(bodies[row * columns + column]);
    }
  }

  const renderer = new Renderer({
    slots,
    canvas,
    image,
    options: {},
  });

  renderer.run();

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);

  // add mouse control
  let mouse = Mouse.create(canvas);
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: true,
      },
    } as any,
  });

  Composite.add(engine.world, mouseConstraint);
};

window.onload = function () {
  let button = document.createElement("button");

  document.body.appendChild(button);

  button.style.position = "fixed";
  button.style.top = "0";
  button.style.right = "0";

  button.style.padding = "1em";

  button.innerText = "Break the webpage";


  button.onclick = () => {
    breakWebPage();
  };
};

console.log ( "My custom webpage breaker loaded ")

