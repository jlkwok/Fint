import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastFintCardComponent } from './past-fint-card.component';

describe('PastFintCardComponent', () => {
  let component: PastFintCardComponent;
  let fixture: ComponentFixture<PastFintCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastFintCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastFintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
