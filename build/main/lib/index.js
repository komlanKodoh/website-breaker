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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakWebPage = void 0;
const matter_js_1 = require("matter-js");
const Renderer_1 = __importDefault(require("./Renderer"));
const utils = __importStar(require("./utils"));
let canvas = document.createElement("canvas");
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.position = "fixed";
canvas.style.zIndex = "100000000000";
canvas.style.top = "0";
canvas.style.right = "0";
let ctx = canvas.getContext("2d");
(_a = document.getElementById("ctrl")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    (0, exports.breakWebPage)();
});
const breakWebPage = async () => {
    var _a, _b;
    if (!ctx) {
        throw new Error("canvas context is not supported ");
    }
    var dst = "some random shit";
    document.getElementsByTagName("title")[0].innerHTML = dst;
    const width = Math.ceil(window.innerWidth);
    const height = Math.ceil(window.innerHeight);
    canvas.width = width;
    canvas.height = height;
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
    let _image = await utils.getScreenShot();
    let image = document.createElement("canvas");
    image.width = width;
    image.height = height;
    // Some basic scaling so that the screenshot always fits the canvas;
    let relative_height = _image.height * width / _image.width;
    // The screenshot goes from the page top to the bottom,
    // we crop the top so that we always render what is actually visible
    (_b = image.getContext("2d")) === null || _b === void 0 ? void 0 : _b.drawImage(_image, 0, height - relative_height, width, relative_height);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFzRTtBQUN0RSwwREFBa0M7QUFDbEMsK0NBQWlDO0FBRWpDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUU5QixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFFekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsQyxNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFOUQsSUFBQSxvQkFBWSxHQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDLENBQUM7QUFFSSxNQUFNLFlBQVksR0FBRyxLQUFLLElBQUksRUFBRTs7SUFFckMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNyRDtJQUlELElBQUksR0FBRyxHQUFHLGtCQUFrQixDQUFDO0lBQzdCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdB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