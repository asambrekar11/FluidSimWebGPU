export class CustomGPUBuffer
{
    dim: number;
    w: number;
    h: number;
    bufferSize: number;
    buffers: Array<GPUBuffer>;
    constructor(dim: number, width: number, height: number, device: GPUDevice){
        this.dim = dim;
        this.bufferSize = width * height * 4;
        this.w = width;
        this.h = height;
        this.buffers = new Array(dim).map(() => device.createBuffer({
            size: this.bufferSize,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
        }));
    }
    
    copyTo(buffer: CustomGPUBuffer, commandEncoder: GPUCommandEncoder) : void{
        for(let i = 0; i < Math.max(buffer.dim, this.dim); ++i){
            commandEncoder.copyBufferToBuffer(
                this.buffers[Math.min(i, this.buffers.length - 1)], 0,
                buffer.buffers[Math.min(i, this.buffers.length - 1)], 0,
                this.bufferSize
            );
        }
    }

    clear(queue: GPUQueue): void{
        for(let i = 0; i < this.dim; ++i){
            queue.writeBuffer(this.buffers[i], 0, new Float32Array(this.w * this.h));
        }
    }
}