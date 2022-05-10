"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakWebPage = void 0;
const matter_js_1 = require("matter-js");
const Renderer_1 = __importDefault(require("./Renderer"));
const utils = __importStar(require("./utils"));
let canvas = document.createElement("canvas");
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.right = "0";
let ctx = canvas.getContext("2d");
const breakWebPage = async () => {
    var _a, _b;
    if (!ctx) {
        throw new Error("canvas context is not supported ");
    }
    const width = Math.ceil(window.innerWidth);
    const height = Math.ceil(window.innerHeight);
    canvas.width = width;
    canvas.height = height;
    (_a = document.getElementById("root")) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
    let _image = await utils.getScreenShot();
    let image = document.createElement('canvas');
    image.width = width;
    image.height = height;
    (_b = image.getContext("2d")) === null || _b === void 0 ? void 0 : _b.drawImage(_image, 0, 0, width, height);
    let { engine, rows, columns } = utils.createStackEngine(width, height);
    let slots = [];
    let bodies = engine.world.composites[0].bodies;
    for (let row = 0; row < rows; row++) {
        let slotRow = [];
        slots.push(slotRow);
        for (let column = 0; column < columns; column++) {
            slotRow.push(bodies[row * columns + column]);
        }
    }
    const renderer = new Renderer_1.default({
        slots,
        canvas,
        image,
        options: {},
    });
    renderer.run();
    // create runner
    var runner = matter_js_1.Runner.create();
    matter_js_1.Runner.run(runner, engine);
    // add mouse control
    let mouse = matter_js_1.Mouse.create(canvas);
    let mouseConstraint = matter_js_1.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: true,
            },
        },
    });
    matter_js_1.Composite.add(engine.world, mouseConstraint);
};
exports.breakWebPage = breakWebPage;
exports.default = exports.breakWebPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0U7QUFDdEUsMERBQWtDO0FBQ2xDLCtDQUFpQztBQUVqQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFFOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFFekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUzQixNQUFNLFlBQVksR0FBRyxLQUFLLElBQUksRUFBRTs7SUFDckMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNyRDtJQUVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRXZCLE1BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsMENBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJELElBQUksTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXpDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFN0MsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFFdEIsTUFBQSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRzlELElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdkUsSUFBSSxLQUFLLEdBQW9CLEVBQUUsQ0FBQztJQUNoQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFL0MsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNuQyxJQUFJLE9BQU8sR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEIsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDOUM7S0FDRjtJQUVELE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQztRQUM1QixLQUFLO1FBQ0wsTUFBTTtRQUNOLEtBQUs7UUFDTCxPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVmLGdCQUFnQjtJQUNoQixJQUFJLE1BQU0sR0FBRyxrQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLGtCQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUzQixvQkFBb0I7SUFDcEIsSUFBSSxLQUFLLEdBQUcsaUJBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsSUFBSSxlQUFlLEdBQUcsMkJBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ25ELEtBQUssRUFBRSxLQUFLO1FBQ1osVUFBVSxFQUFFO1lBQ1YsU0FBUyxFQUFFLEdBQUc7WUFDZCxNQUFNLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNLO0tBQ1QsQ0FBQyxDQUFDO0lBRUgscUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUEvRFcsUUFBQSxZQUFZLGdCQStEdkI7QUFFRixrQkFBZSxvQkFBWSxDQUFDIn0=