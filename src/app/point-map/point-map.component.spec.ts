import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointMapComponent } from './point-map.component';

describe('PointMapComponent', () => {
  let component: PointMapComponent;
  let fixture: ComponentFixture<PointMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
