import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbooksComponent } from './getbooks.component';

describe('GetbooksComponent', () => {
  let component: GetbooksComponent;
  let fixture: ComponentFixture<GetbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetbooksComponent]
    });
    fixture = TestBed.createComponent(GetbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
