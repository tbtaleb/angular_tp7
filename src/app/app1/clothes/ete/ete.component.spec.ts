import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EteComponent } from './ete.component';

describe('EteComponent', () => {
  let component: EteComponent;
  let fixture: ComponentFixture<EteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EteComponent]
    });
    fixture = TestBed.createComponent(EteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
