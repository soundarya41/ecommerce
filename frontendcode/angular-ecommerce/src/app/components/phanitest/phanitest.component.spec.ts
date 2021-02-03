import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanitestComponent } from './phanitest.component';

describe('PhanitestComponent', () => {
  let component: PhanitestComponent;
  let fixture: ComponentFixture<PhanitestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhanitestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
