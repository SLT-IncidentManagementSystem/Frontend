import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTechnicianComponent } from '../../components/header-technician/header-technician.component';

@Component({
  selector: 'app-technician-layout',
  imports: [RouterOutlet, HeaderTechnicianComponent],
  templateUrl: './technician-layout.component.html',
  styleUrl: './technician-layout.component.css'
})
export class TechnicianLayoutComponent {

}
