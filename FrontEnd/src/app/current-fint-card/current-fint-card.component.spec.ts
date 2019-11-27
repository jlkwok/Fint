import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFintCardComponent } from './current-fint-card.component';

describe('CurrentFintCardComponent', () => {
  let component: CurrentFintCardComponent;
  let fixture: ComponentFixture<CurrentFintCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFintCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
