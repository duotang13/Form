import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../data-model';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-detail2',
  templateUrl: './customer-detail2.component.html',
  styleUrls: ['./customer-detail2.component.css']
})
export class CustomerDetail2Component implements OnInit {
  customerForm: FormGroup; // <---- customerForm est un objet de type de FormGroup
  customer: Customer;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService) {// <--- Inject FormBuilder
    this.createForm();
    this.customer = this.customerService.latestCustomer;
  }

  createForm() {
    this.customerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  prepareSaveCustomer(): Customer {
    const customer = this.customerService.latestCustomer;
    customer.firstName = this.customerForm.get('firstName').value;
    customer.lastName = this.customerForm.get('lastName').value;
    customer.email = this.customerForm.get('email').value;
    return customer;
  }

  onSubmit(): void {
    this.customerService.updateCustomer(this.prepareSaveCustomer());
    this.customer = this.customerService.latestCustomer; // <---- Sert juste à l'Afficher dans le HTML
  }





  ngOnInit() {
  }

}
