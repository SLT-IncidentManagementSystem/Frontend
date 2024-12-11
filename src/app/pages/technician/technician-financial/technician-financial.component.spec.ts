import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianFinancialComponent } from './technician-financial.component';

describe('TechnicianFinancialComponent', () => {
  let component: TechnicianFinancialComponent;
  let fixture: ComponentFixture<TechnicianFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianFinancialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
