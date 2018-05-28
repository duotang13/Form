import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Customer } from '../data-model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerForm: FormGroup; // <---- customerForm est un objet de type de FormGroup
  customer: Customer;
  countries = [
    { value: 'can', viewValue: 'Canada' },
    { value: 'usa', viewValue: 'USA' },
    { value: 'mex', viewValue: 'Mexique' }
  ];

  // Inject FormBuilder, CustomerService et Router
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router) {
    this.createForm();

  }

  // Retourne un objet Customer avec les champs du form de remplie
  prepareSaveCustomer(): Customer {
    const customer = new Customer;
    customer.companyName = this.customerForm.get('companyName').value;
    customer.country = this.customerForm.get('country').value;
    customer.nbEmployees = this.customerForm.get('nbEmployees').value;
    return customer;
  }

  // Change la propriété latestCustomer dans le customerService
  onSubmit(value: any): void {
    this.customerService.updateCustomer(this.prepareSaveCustomer());
    this.customer = this.customerService.latestCustomer; // <---- Sert juste à l'Afficher dans le HTML
    this.router.navigateByUrl('/contact');  // Permet de naviguer vers le prochain form. Requiert d'injecter router

  }

  // Créé les handle qui permettent d'aller chercher les infos dans les input fields
  createForm() {

    this.customerForm = this.formBuilder.group({
      companyName: ['Elucidia', Validators.required],
      country: ['can', Validators.required],
      nbEmployees: ['0-10', Validators.required]

    });



  }
  ngOnInit() {

  }

}
