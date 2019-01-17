import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaAndWellnessComponent } from './spa-and-wellness.component';

describe('SpaAndWellnessComponent', () => {
  let component: SpaAndWellnessComponent;
  let fixture: ComponentFixture<SpaAndWellnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaAndWellnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaAndWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
