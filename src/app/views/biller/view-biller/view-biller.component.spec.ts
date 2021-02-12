import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillerComponent } from './view-biller.component';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ViewBillerComponent', () => {
  let component: ViewBillerComponent;
  let fixture: ComponentFixture<ViewBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBillerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpTestingController],
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
