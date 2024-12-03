import { Component } from '@angular/core';
import { FluidSimulationComponent } from './fluid-simulation/fluid-simulation.component';

@Component({
  selector: 'app-root',
  imports: [FluidSimulationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fluidsimulator';
}
