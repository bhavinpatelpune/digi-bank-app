import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignBankAccountComponent } from './foreign-bank-account.component';

describe('ForeignBankAccountComponent', () => {
  let component: ForeignBankAccountComponent;
  let fixture: ComponentFixture<ForeignBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
