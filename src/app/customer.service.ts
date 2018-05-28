import { Injectable } from '@angular/core';
import { Customer } from './data-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  latestCustomer: Customer;

  customerUrl = 'http://127.0.0.1:3000/customer';


  constructor(private http: HttpClient) { }


  updateCustomer(customer: Customer) {
    this.latestCustomer = customer;
  }

  postCustomer(): Observable<boolean> {
    // return this.http.post<Customer>(this.customerUrl, this.latestCustomer);
    return this.http.post<boolean>(this.customerUrl, this.latestCustomer);
  }



}

