import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDoesNotExistComponent } from './company-does-not-exist.component';

describe('CompanyDoesNotExistComponent', () => {
  let component: CompanyDoesNotExistComponent;
  let fixture: ComponentFixture<CompanyDoesNotExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDoesNotExistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDoesNotExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
