import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes = [
  { path: "complain", component: ComplaintComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule, // Include HttpClientModule here
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
