import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "ecommerce", component: EcommerceComponent },
  { path: "", redirectTo: "ecommerce", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
