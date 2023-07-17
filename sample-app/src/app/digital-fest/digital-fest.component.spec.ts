import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalFestComponent } from './digital-fest.component';

describe('DigitalFestComponent', () => {
  let component: DigitalFestComponent;
  let fixture: ComponentFixture<DigitalFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalFestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
