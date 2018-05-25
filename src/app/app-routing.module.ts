import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetail2Component } from './customer-detail2/customer-detail2.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: CustomerDetailComponent },
  { path: 'contact', component: CustomerDetail2Component },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule // permet d'utiliser les directive de router dans AppModule

  ],
})
export class AppRoutingModule { }

