import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from '../../containers/home-view/home-view.component';
import { DynamicLoaderDirective } from '../../directives/data.loader.directive';





@NgModule({
  declarations: [DynamicLoaderDirective, HomeViewComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [HomeViewComponent]
})
export class HomeModule { }
