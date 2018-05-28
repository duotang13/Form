import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../data-model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';

@Component({
  selector: 'app-customer-detail2',
  templateUrl: './customer-detail2.component.html',
  styleUrls: ['./customer-detail2.component.css']
})
export class CustomerDetail2Component implements OnInit {
  customerForm: FormGroup; // <---- customerForm est un objet de type de FormGroup
  customer: Customer;
  flag: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router) {// <--- Inject FormBuilder
    this.createForm();
    this.customer = this.customerService.latestCustomer;
  }

  createForm() {
    this.customerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      phone: [null, Validators.required]
    });
  }

  prepareSaveCustomer(): Customer {
    const customer = this.customerService.latestCustomer;
    customer.firstName = this.customerForm.get('firstName').value;
    customer.lastName = this.customerForm.get('lastName').value;
    customer.email = this.customerForm.get('email').value;
    customer.phone = this.customerForm.get('phone').value;
    return customer;
  }

  onSubmit(): void {
    this.customerService.updateCustomer(this.prepareSaveCustomer());
    this.customer = this.customerService.latestCustomer; // <---- Sert juste à l'Afficher dans le HTML
    this.customerService.postCustomer()
      .subscribe(isValid => this.flag = isValid);
  }



  ngOnInit() { }

}
