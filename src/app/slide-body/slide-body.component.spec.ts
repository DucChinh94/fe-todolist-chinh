import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBodyComponent } from './slide-body.component';

describe('SlideBodyComponent', () => {
  let component: SlideBodyComponent;
  let fixture: ComponentFixture<SlideBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
