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
    const width = Math.ceil(window.innerWidth / 30) * 30;
    const height = Math.ceil(window.innerHeight / 30) * 30;
    canvas.width = width;
    canvas.height = height;
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
    let _image = await utils.getScreenShot();
    let image = document.createElement("canvas");
    image.width = width;
    image.height = height;
    // Some basic scaling so that the screenshot always fits the canvas;
    let relative_height = Math.ceil(_image.height * width / _image.width);
    // The screenshot goes from the page top to the bottom,
    // we crop the top so that we always render what is actually visible
    (_b = image.getContext("2d")) === null || _b === void 0 ? void 0 : _b.drawImage(_image, 0, 0, width, relative_height);
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