import html2canvas from "html2canvas";
import { Bodies, Composite, Composites, Engine } from "matter-js";

export const getScreenShot = async () => {
  return await html2canvas(document.body);
};

export const createStackEngine = (width: number, height: number) => {
  let engine = Engine.create();
  engine.gravity.y = 0.09;

  let world = engine.world;

  let WALL_THICKNESS = 50;
  let UNIT_SIZE = 50;

  let columns = Math.ceil(width / UNIT_SIZE);
  let rows = Math.floor(height / UNIT_SIZE);

  var stack = Composites.stack(
    0,
    0,
    columns,
    rows,
    0,
    0,
    (x: number, y: number) => {
      let rectangle = Bodies.rectangle(x, y, UNIT_SIZE, UNIT_SIZE);
      rectangle.restitution = 0;
      rectangle.density = 0;

      return rectangle;
    }
  );

  Composite.add(world, [
    stack,
    Bodies.rectangle(
      width / 2,
      height + WALL_THICKNESS / 2,
      width,
      height / 10,
      { isStatic: true }
    ),
  ]);

  return {
    rows,
    engine,
    columns,
  };
};
