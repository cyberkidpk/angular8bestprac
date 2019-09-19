import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from '../../models/dy.comp.model';
import { DYNAMIC_COMPONENT_DATA , ComponentType} from '../../constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements DynamicComponent, OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) public data) {}

  ngOnInit() {
  }

  getComponentType(): ComponentType {
    return ComponentType.about;
  }
}
