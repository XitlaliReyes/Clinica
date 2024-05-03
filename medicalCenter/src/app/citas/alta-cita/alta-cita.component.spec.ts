import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCitaComponent } from './alta-cita.component';

describe('AltaCitaComponent', () => {
  let component: AltaCitaComponent;
  let fixture: ComponentFixture<AltaCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
