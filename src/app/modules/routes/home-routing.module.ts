
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { HomeViewComponent } from '../../containers/home-view/home-view.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent },
];

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [NgbModule, HomeModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [HomeComponent, AboutComponent]
})
export class HomeRoutingModule { }
