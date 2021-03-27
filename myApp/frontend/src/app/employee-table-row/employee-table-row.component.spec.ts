import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableRowComponent } from './employee-table-row.component';

describe('EmployeeTableRowComponent', () => {
  let component: EmployeeTableRowComponent;
  let fixture: ComponentFixture<EmployeeTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
