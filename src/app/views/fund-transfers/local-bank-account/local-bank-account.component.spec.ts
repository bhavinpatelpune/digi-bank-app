import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBankAccountComponent } from './local-bank-account.component';

describe('LocalBankAccountComponent', () => {
  let component: LocalBankAccountComponent;
  let fixture: ComponentFixture<LocalBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
