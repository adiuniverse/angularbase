import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeroselComponent } from './kerosel.component';

describe('KeroselComponent', () => {
  let component: KeroselComponent;
  let fixture: ComponentFixture<KeroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeroselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
