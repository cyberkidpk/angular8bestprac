import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ComponentType, DYNAMIC_COMPONENT_DATA } from '../../constants';
import { CommonModule } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const data = {
    meta: {
      type: ComponentType.home
    },
    data: {
      text: 'this is some Home View text'
    }
  };

  beforeEach(async(() => {

    const staticProvider = [{ provide: DYNAMIC_COMPONENT_DATA, useValue: data }];
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [CommonModule],
      providers: [staticProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
