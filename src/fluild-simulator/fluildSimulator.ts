import { CustomGPUBuffer } from "./utils";

export class StableFluidSimulator
{
    private size: number;
    private x: CustomGPUBuffer | undefined;
    private y : CustomGPUBuffer  | undefined;
    private xPrev: CustomGPUBuffer | undefined;
    private yPrev: CustomGPUBuffer  | undefined;

    private r: CustomGPUBuffer  | undefined;
    private g: CustomGPUBuffer  | undefined;
    private b: CustomGPUBuffer  | undefined;

    private rPrev: CustomGPUBuffer  | undefined;
    private gPrev: CustomGPUBuffer  | undefined;
    private bPrev: CustomGPUBuffer  | undefined;

    // WebGPU
    private canvas: HTMLCanvasElement | undefined;
    private adaptor: GPUAdapter | null | undefined;
    private device: GPUDevice | undefined;
    private context: GPUCanvasContext | undefined;

    // Sim data
    private lastFrame: number = 0;
    private simSpeed: number = 1;

    constructor(size: number){
        this.size = size;
    }

    public async init(canvasName: string){
        await this.initWebgpu(canvasName);
        this.initResources();
        this.lastFrame = performance.now();
    }

    public simulate(){
        const now = performance.now();
        const dt = Math.min(1/60, (now - this.lastFrame) / 1000)* this.simSpeed;
        this.lastFrame = now;
        //console.log(dt);
    }

    public render() {

    }

    private initResources(){

    }

    private async initWebgpu(canvasName: string){

        this.canvas = document.getElementById('canvas-webgpu') as HTMLCanvasElement;
        this.adaptor = await navigator.gpu?.requestAdapter();
        this.device  = (await this.adaptor?.requestDevice()) as GPUDevice;
        this.context = this.canvas.getContext("webgpu") as GPUCanvasContext;
    }


}