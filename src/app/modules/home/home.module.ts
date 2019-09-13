import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { HomeViewComponent } from '../../containers/home-view/home-view.component';



@NgModule({
  declarations: [HomeComponent, HomeViewComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
