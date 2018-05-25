
// Dependencies
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Pour gérer les forms
import { RouterModule } from '@angular/router'; // Pour le routing
import { HttpClientModule } from '@angular/common/http'; // Pour la communication http
import { MatButtonModule, MatCheckboxModule } from '@angular/material'; // Les components material, ajouter ceux qu'on veut
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Pour les animations material

// Material modules
import {MatFormFieldModule} from '@angular/material/form-field';




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
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,


    MatFormFieldModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
