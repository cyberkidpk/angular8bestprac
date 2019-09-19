import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from '../../models/dy.comp.model';
import { DYNAMIC_COMPONENT_DATA, ComponentType } from '../../constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements DynamicComponent, OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) public data) {}

  ngOnInit() {
  }

  getComponentType(): ComponentType {
    return ComponentType.home;
  }
}
