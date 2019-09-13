
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { HomeViewComponent } from '../../containers/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
];

@NgModule({
  imports: [NgbModule, HomeModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
