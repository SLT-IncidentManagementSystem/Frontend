import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTechnicianComponent } from './header-technician.component';

describe('HeaderTechnicianComponent', () => {
  let component: HeaderTechnicianComponent;
  let fixture: ComponentFixture<HeaderTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
