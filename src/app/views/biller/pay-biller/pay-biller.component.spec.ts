import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillerComponent } from './pay-biller.component';

describe('PayBillerComponent', () => {
  let component: PayBillerComponent;
  let fixture: ComponentFixture<PayBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
