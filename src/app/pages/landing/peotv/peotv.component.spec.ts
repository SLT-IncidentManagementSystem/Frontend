import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeotvComponent } from './peotv.component';

describe('PeotvComponent', () => {
  let component: PeotvComponent;
  let fixture: ComponentFixture<PeotvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeotvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeotvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
