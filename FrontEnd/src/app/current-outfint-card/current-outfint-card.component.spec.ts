import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOutfintCardComponent } from './current-outfint-card.component';

describe('CurrentOutfintCardComponent', () => {
  let component: CurrentOutfintCardComponent;
  let fixture: ComponentFixture<CurrentOutfintCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOutfintCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOutfintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
