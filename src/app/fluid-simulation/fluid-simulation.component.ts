import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluid-simulation',
  imports: [],
  templateUrl: './fluid-simulation.component.html',
  styleUrl: './fluid-simulation.component.css'
})
export class FluidSimulationComponent implements OnInit {

  async ngOnInit(): Promise<void> {
    const canvas = document.getElementById('canvas-webgpu') as HTMLCanvasElement;
    const adaptor = await navigator.gpu?.requestAdapter();
    const device  = (await adaptor?.requestDevice()) as GPUDevice;
    const context = canvas.getContext("webgpu") as GPUCanvasContext;
  }

}
