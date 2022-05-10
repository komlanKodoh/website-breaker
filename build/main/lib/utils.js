"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStackEngine = exports.getScreenShot = void 0;
const html2canvas_1 = __importDefault(require("html2canvas"));
const matter_js_1 = require("matter-js");
const getScreenShot = async () => {
    return await (0, html2canvas_1.default)(document.body, { allowTaint: true });
};
exports.getScreenShot = getScreenShot;
const createStackEngine = (width, height) => {
    let engine = matter_js_1.Engine.create();
    engine.gravity.y = 0.05;
    let world = engine.world;
    let WALL_THICKNESS = 50;
    let UNIT_SIZE = 30;
    let columns = Math.ceil(width / UNIT_SIZE);
    let rows = Math.ceil(height / UNIT_SIZE);
    var stack = matter_js_1.Composites.stack(0, 0, columns, rows, 0, 0, (x, y) => {
        let rectangle = matter_js_1.Bodies.rectangle(x, y, UNIT_SIZE, UNIT_SIZE);
        rectangle.restitution = 0;
        rectangle.density = 0;
        return rectangle;
    });
    matter_js_1.Composite.add(world, [
        stack,
        matter_js_1.Bodies.rectangle(width / 2, height + WALL_THICKNESS, width, height / 10, { isStatic: true }),
    ]);
    return {
        rows,
        engine,
        columns,
    };
};
exports.createStackEngine = createStackEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFzQztBQUN0Qyx5Q0FBa0U7QUFFM0QsTUFBTSxhQUFhLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDdEMsT0FBTyxNQUFNLElBQUEscUJBQVcsRUFBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRlcsUUFBQSxhQUFhLGlCQUV4QjtBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDakUsSUFBSSxNQUFNLEdBQUcsa0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUV6QixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDeEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRW5CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBRXpDLElBQUksS0FBSyxHQUFHLHNCQUFVLENBQUMsS0FBSyxDQUMxQixDQUFDLEVBQ0QsQ0FBQyxFQUNELE9BQU8sRUFDUCxJQUFJLEVBQ0osQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTtRQUN2QixJQUFJLFNBQVMsR0FBRyxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3RCxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUMxQixTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDLENBQ0YsQ0FBQztJQUVGLHFCQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtRQUNuQixLQUFLO1FBQ0wsa0JBQU0sQ0FBQyxTQUFTLENBQ2QsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsY0FBYyxFQUN2QixLQUFLLEVBQ0wsTUFBTSxHQUFHLEVBQUUsRUFDWCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0wsSUFBSTtRQUNKLE1BQU07UUFDTixPQUFPO0tBQ1IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTVDVyxRQUFBLGlCQUFpQixxQkE0QzVCIn0=