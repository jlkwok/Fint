import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfintComponent } from './outfint.component';

describe('OutfintComponent', () => {
  let component: OutfintComponent;
  let fixture: ComponentFixture<OutfintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
