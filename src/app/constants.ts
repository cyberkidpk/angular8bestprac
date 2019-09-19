import { InjectionToken } from '@angular/core';

export const DYNAMIC_COMPONENT_DATA = new InjectionToken<any>('DynamicComponentData');

export enum ComponentType {
    home = 'Home',
    homeView = 'HomeView',
    about = 'About',
}
