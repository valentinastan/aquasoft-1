import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-employee-table-row',
  templateUrl: './employee-table-row.component.html',
  styleUrls: ['./employee-table-row.component.css']
})
export class EmployeeTableRowComponent implements OnInit {
  @Input('employee') employee: Employee

  public employeesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.employeesForm = this.fb.group({
      Name: this.fb.control(this.employee.Name),
      Email: this.fb.control(this.employee.Email)
    })
  }

  update(): void {
    console.log(this.employeesForm)
    console.log(this.employeesForm.value)
    this.employeeService.update(
      this.employee.Project_id, 
      this.employee.id,
      this.employeesForm.value
    ).subscribe((data) => console.log('YEEE IN MM'))
  }

}
