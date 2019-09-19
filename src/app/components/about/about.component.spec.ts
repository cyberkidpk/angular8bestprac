import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DYNAMIC_COMPONENT_DATA, ComponentType } from '../../constants';

import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  const data = {
    meta: {
      type: ComponentType.about
    },
    data: {
      text: 'this is some Home View text'
    }
  };

  beforeEach(async(() => {

    const staticProvider = [{ provide: DYNAMIC_COMPONENT_DATA, useValue: data }];
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [CommonModule],
      providers: [staticProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
