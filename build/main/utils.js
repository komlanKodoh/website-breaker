"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStackEngine = exports.getScreenShot = void 0;
const html2canvas_1 = __importDefault(require("html2canvas"));
const matter_js_1 = require("matter-js");
const getScreenShot = async () => {
    return await (0, html2canvas_1.default)(document.body);
};
exports.getScreenShot = getScreenShot;
const createStackEngine = (width, height) => {
    let engine = matter_js_1.Engine.create();
    let world = engine.world;
    let WALL_THICKNESS = 50;
    let UNIT_SIZE = 50;
    let columns = Math.ceil(width / UNIT_SIZE);
    let rows = Math.floor(height / UNIT_SIZE);
    var stack = matter_js_1.Composites.stack(0, 0, columns, rows, 0, 0, (x, y) => {
        let rectangle = matter_js_1.Bodies.rectangle(x, y, UNIT_SIZE, UNIT_SIZE);
        rectangle.restitution = 0;
        return rectangle;
    });
    console.log(stack);
    matter_js_1.Composite.add(world, [
        stack,
        matter_js_1.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width, height / 10, { isStatic: true }),
    ]);
    return {
        rows,
        engine,
        columns,
    };
};
exports.createStackEngine = createStackEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQXNDO0FBQ3RDLHlDQUFrRTtBQUUzRCxNQUFNLGFBQWEsR0FBRyxLQUFLLElBQUksRUFBRTtJQUN0QyxPQUFPLE1BQU0sSUFBQSxxQkFBVyxFQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFGVyxRQUFBLGFBQWEsaUJBRXhCO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUNqRSxJQUFJLE1BQU0sR0FBRyxrQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFekIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVuQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQztJQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztJQUUxQyxJQUFJLEtBQUssR0FBRyxzQkFBVSxDQUFDLEtBQUssQ0FDMUIsQ0FBQyxFQUNELENBQUMsRUFDRCxPQUFPLEVBQ1AsSUFBSSxFQUNKLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7UUFDdkIsSUFBSSxTQUFTLEdBQUcsa0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0QsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFMUIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQyxDQUNGLENBQUM7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5CLHFCQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtRQUNuQixLQUFLO1FBQ0wsa0JBQU0sQ0FBQyxTQUFTLENBQ2QsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFDM0IsS0FBSyxFQUNMLE1BQU0sR0FBRyxFQUFFLEVBQ1gsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTztRQUNMLElBQUk7UUFDSixNQUFNO1FBQ04sT0FBTztLQUNSLENBQUM7QUFDSixDQUFDLENBQUM7QUEzQ1csUUFBQSxpQkFBaUIscUJBMkM1QiJ9