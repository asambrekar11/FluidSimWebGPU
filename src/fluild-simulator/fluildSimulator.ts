import { CustomGPUBuffer } from "./utils";

export class fluidSimulator
{
    size: number;
    x: CustomGPUBuffer | undefined;
    y : CustomGPUBuffer  | undefined;
    xPrev: CustomGPUBuffer | undefined;
    yPrev: CustomGPUBuffer  | undefined;

    r: CustomGPUBuffer  | undefined;
    g: CustomGPUBuffer  | undefined;
    b: CustomGPUBuffer  | undefined;

    rPrev: CustomGPUBuffer  | undefined;
    gPrev: CustomGPUBuffer  | undefined;
    bPrev: CustomGPUBuffer  | undefined;

    constructor(size: number){
        this.size = size;
    }
}