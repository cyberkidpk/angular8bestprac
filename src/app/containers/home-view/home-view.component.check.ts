import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DynamicLoaderDirective} from '../../directives/data.loader.directive';

import { HomeViewComponent } from './home-view.component';
import { CommonModule } from '@angular/common';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewComponent, DynamicLoaderDirective ],
      imports: [CommonModule],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ HomeViewComponent ],
      }
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
