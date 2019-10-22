import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfintCardComponent } from './outfint-card.component';

describe('OutfintCardComponent', () => {
  let component: OutfintCardComponent;
  let fixture: ComponentFixture<OutfintCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfintCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
