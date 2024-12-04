import { Component, OnInit, NgZone } from '@angular/core';
import { StableFluidSimulator } from '../../fluild-simulator/fluildSimulator';
@Component({
  selector: 'app-fluid-simulation',
  imports: [],
  templateUrl: './fluid-simulation.component.html',
  styleUrl: './fluid-simulation.component.css'
})
export class FluidSimulationComponent implements OnInit {
  fluid_simulator: StableFluidSimulator | undefined;

  constructor(private ngZone: NgZone){}

  async ngOnInit(): Promise<void> {
    this.fluid_simulator = new StableFluidSimulator(512);

    this.fluid_simulator.init('canvas-webgpu');
    
    this.ngZone.runOutsideAngular(() => this.animate());
  }

  onMouseMove(event: MouseEvent){
    console.log('Mouse position:', event.clientX, event.clientY);
  }

  animate() {

    this.fluid_simulator?.simulate();

    this.fluid_simulator?.render();

    requestAnimationFrame(() => this.animate());
  }

}
