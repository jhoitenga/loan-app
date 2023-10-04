/**
 * Title: total-interest.component.spec.ts
 * Author: Jennifer Hoitenga
 * Date: October 4, 2023
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInterestComponent } from './total-interest.component';

describe('TotalInterestComponent', () => {
  let component: TotalInterestComponent;
  let fixture: ComponentFixture<TotalInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TotalInterestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
