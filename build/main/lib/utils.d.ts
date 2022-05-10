import { Engine } from "matter-js";
export declare const getScreenShot: () => Promise<HTMLCanvasElement>;
export declare const createStackEngine: (width: number, height: number) => {
    rows: number;
    engine: Engine;
    columns: number;
};
