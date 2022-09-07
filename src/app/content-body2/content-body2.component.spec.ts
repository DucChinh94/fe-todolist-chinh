import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBody2Component } from './content-body2.component';

describe('ContentBody2Component', () => {
  let component: ContentBody2Component;
  let fixture: ComponentFixture<ContentBody2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBody2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
