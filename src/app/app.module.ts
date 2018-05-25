
// Dependencies
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Pour gérer les forms

import { RouterModule } from '@angular/router'; // Pour le routing
import { HttpClientModule } from '@angular/common/http'; // Pour la communication http
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Pour les animations material

// Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


// Code local (Components, etc)
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetail2Component } from './customer-detail2/customer-detail2.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomerDetail2Component,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
