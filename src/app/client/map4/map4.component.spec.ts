import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map4Component } from './map4.component';

describe('Map4Component', () => {
  let component: Map4Component;
  let fixture: ComponentFixture<Map4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
