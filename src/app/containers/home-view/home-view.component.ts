import { Component, OnInit, AfterViewChecked, ComponentFactoryResolver, Injector, Input, ViewChildren } from '@angular/core';
import { DynamicComponentData } from '../../models/dy.comp.data.model';
import {DynamicLoaderDirective} from '../../directives/data.loader.directive';
import { DYNAMIC_COMPONENT_DATA, ComponentType } from '../../constants';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit, AfterViewChecked {
  selected: DynamicComponentData = null;
  directive: any;
  @ViewChildren(DynamicLoaderDirective)
  set setDirective(directive: DynamicLoaderDirective) {

    this.directive = directive;
  }


  constructor(private cFactResolve: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.selected = {
      meta: {
        type: ComponentType.home
      },
      data: {
        text: 'this is some Home text'
      }
    };

    /* const componentFactory = this.cFactResolve.resolveComponentFactory(HomeComponent);
    const viewContainerRef = this.homeView;
    setTimeout(() => {
      const componentFactoryOne = this.cFactResolve.resolveComponentFactory(AppComponent);
      viewContainerRef.createComponent(componentFactoryOne);
    }, 3000);

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(componentRef); */

  }
  ngAfterViewChecked() {
   // console.log(this.appDynamicLoader);


  }
  createInjector(data: DynamicComponentData, parentInjector: Injector) {
    const staticProvider = [{ provide: DYNAMIC_COMPONENT_DATA, useValue: data }];

    return Injector.create(staticProvider, parentInjector);
  }

  addComp(compName) {
    this.selected = {
      meta: {
        type: ComponentType.about
      },
      data: {
        text: 'this is some Home View text'
      }
    };

  }

}
