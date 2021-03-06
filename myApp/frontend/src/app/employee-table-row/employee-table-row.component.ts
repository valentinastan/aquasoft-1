import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../services/employees-service/employees.service';
import { Employee } from '../types/employee';

@Component({
  selector: 'tbody[app-employee-table-row]',
  templateUrl: './employee-table-row.component.html',
  styleUrls: ['./employee-table-row.component.css']
})
export class EmployeeTableRowComponent implements OnInit {
  @Input('employee') employee: Employee
  @Output() employeeChanged: EventEmitter<any> = new EventEmitter();

  public employeesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService,
  ) { }

  ngOnInit(): void {
    this.employeesForm = this.fb.group({
      Name: this.fb.control(this.employee.Name, [Validators.required, Validators.maxLength(60), Validators.pattern(/^[a-zA-Z -]+$/)]),
      Email: this.fb.control(this.employee.Email, [Validators.required, Validators.email]),
      Hire_date: this.fb.control(this.employee.Hire_date),
      Salary: this.fb.control(this.employee.Salary, [Validators.required, Validators.max(100000)]),
      Job_Title: this.fb.control(this.employee.Job_Title, [Validators.required, Validators.maxLength(60), Validators.pattern(/^[a-zA-Z -]+$/)])
    })
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.employeesForm.controls[controlName].hasError(errorName);
  }

  update(): void {
    this.employeeService.update(
      this.employee.Project_id, 
      this.employee.id,
      this.employeesForm.value
    ).subscribe((data) => console.log('UPDATED'))

    this.employeeChanged.emit({
      employee: {
        id: this.employee.id, 
        ...this.employeesForm.value
      },
      type: "UPDATE"
    })
  }

  delete(): void {
    this.employeeService.delete(
      this.employee.id
      ).subscribe(()=> console.log('DELETED'))

      this.employeeChanged.emit({
        employeeId: this.employee.id,
        type: "DELETE"
      })
  }

}
