import { Injectable } from '@angular/core';
import { Customer } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  latestCustomer: Customer;

  updateCustomer(customer: Customer) {
    this.latestCustomer = customer;
  }

  constructor() { }
}
