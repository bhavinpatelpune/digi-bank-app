import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillerComponent } from './add-biller.component';

describe('AddBillerComponent', () => {
  let component: AddBillerComponent;
  let fixture: ComponentFixture<AddBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
