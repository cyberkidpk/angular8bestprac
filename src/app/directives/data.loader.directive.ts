import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, Injector, ViewChildren, ElementRef } from '@angular/core';
import { DynamicComponentData } from '../models/dy.comp.data.model';
import { ComponentType, DYNAMIC_COMPONENT_DATA } from '../constants';

@Directive({
  selector: '[appDynamicLoader]'
})
export class DynamicLoaderDirective {
  @Input() set data(data: DynamicComponentData) {
    this.load(data);
  }

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef,  private el: ElementRef, ) {
  }

  load(component: DynamicComponentData): any {
    if (!component) {
      throw new Error('failed to load dynamic component');
    }

    const factory = this.getComponentFactory(component.meta.type);

    const injector = this.createInjector(component.data, this.viewContainerRef.parentInjector);

    // this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(factory, null, injector);
  // this.el.nativeElement.appendChild(compRef.location.nativeElement);
  }

  public getComponentFactory(type: ComponentType) {
    const tarFactObj = this.targetFactoryObject(this.resolver);
    if (tarFactObj) {
    const factories = Array.from<any>(tarFactObj.keys());

    const factoryClass = factories.find(item =>
      item.prototype.getComponentType && item.prototype.getComponentType() === type
      );

    return this.resolver.resolveComponentFactory(factoryClass);
    }
  }

  createInjector(data: DynamicComponentData, parentInjector: Injector) {
    const staticProvider = [{ provide: DYNAMIC_COMPONENT_DATA, useValue: data }];

    return Injector.create(staticProvider, parentInjector);
  }
  targetFactoryObject(parentObj) {
    for (const key in parentObj) {
      if (key === '_factories') {

        return parentObj[key];
      }


    }
  }

}
