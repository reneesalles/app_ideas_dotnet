import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { BeginnerHomeComponent } from './tier_1_beginner/beginner-home/beginner-home.component';
import { Bin2decComponent } from './tier_1_beginner/bin2dec/bin2dec.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "beginner",
    component: BeginnerHomeComponent
  },
  {
    path: 'beginner/bin2dec',
    component: Bin2decComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
