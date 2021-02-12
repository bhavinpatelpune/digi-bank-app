import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAccountComponent } from './self-account.component';

describe('SelfAccountComponent', () => {
  let component: SelfAccountComponent;
  let fixture: ComponentFixture<SelfAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
