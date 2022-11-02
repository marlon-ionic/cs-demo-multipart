import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordovaPage } from './cordova.page';

describe('CordovaPage', () => {
  let component: CordovaPage;
  let fixture: ComponentFixture<CordovaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordovaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CordovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
