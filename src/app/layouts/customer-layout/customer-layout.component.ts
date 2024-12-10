import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCustomerComponent } from '../../components/header-customer/header-customer.component';

@Component({
  selector: 'app-customer-layout',
  imports: [RouterOutlet, HeaderCustomerComponent],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
