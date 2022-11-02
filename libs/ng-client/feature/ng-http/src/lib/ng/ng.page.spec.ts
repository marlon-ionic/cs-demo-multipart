import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGPage } from './ng.page';

describe('NGPage', () => {
  let component: NGPage;
  let fixture: ComponentFixture<NGPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NGPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
