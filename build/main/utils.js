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
    engine.gravity.y = 0.05;
    let world = engine.world;
    let WALL_THICKNESS = 50;
    let UNIT_SIZE = 100;
    let columns = Math.ceil(width / UNIT_SIZE);
    let rows = Math.floor(height / UNIT_SIZE);
    var stack = matter_js_1.Composites.stack(0, 0, columns, rows, 0, 0, (x, y) => {
        let rectangle = matter_js_1.Bodies.rectangle(x, y, UNIT_SIZE, UNIT_SIZE);
        rectangle.restitution = 0;
        rectangle.density = 0;
        return rectangle;
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQXNDO0FBQ3RDLHlDQUFrRTtBQUUzRCxNQUFNLGFBQWEsR0FBRyxLQUFLLElBQUksRUFBRTtJQUN0QyxPQUFPLE1BQU0sSUFBQSxxQkFBVyxFQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFGVyxRQUFBLGFBQWEsaUJBRXhCO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUNqRSxJQUFJLE1BQU0sR0FBRyxrQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUV4QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBRXpCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUN4QixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFFMUMsSUFBSSxLQUFLLEdBQUcsc0JBQVUsQ0FBQyxLQUFLLENBQzFCLENBQUMsRUFDRCxDQUFDLEVBQ0QsT0FBTyxFQUNQLElBQUksRUFDSixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO1FBQ3ZCLElBQUksU0FBUyxHQUFHLGtCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdELFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUMsQ0FDRixDQUFDO0lBRUYscUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ25CLEtBQUs7UUFDTCxrQkFBTSxDQUFDLFNBQVMsQ0FDZCxLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUMzQixLQUFLLEVBQ0wsTUFBTSxHQUFHLEVBQUUsRUFDWCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0wsSUFBSTtRQUNKLE1BQU07UUFDTixPQUFPO0tBQ1IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTVDVyxRQUFBLGlCQUFpQixxQkE0QzVCIn0=