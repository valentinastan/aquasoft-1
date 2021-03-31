import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../services/employees-service/employees.service';


@Component({
  selector: 'app-employee-create-form',
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.css']
})
export class EmployeeCreateFormComponent {
  @Output() employeeChanged: EventEmitter<any> = new EventEmitter();
  public employeesForm: FormGroup;
  public projectId: number;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeCreateFormComponent>,
    private employeeService: EmployeesService,
    @Inject(MAT_DIALOG_DATA)
    public data: { route: ActivatedRoute }
  ) {
    data.route.params.subscribe(params => this.projectId = params.id);
  }

  ngOnInit(): void {
    this.employeesForm = this.fb.group({
      Name: this.fb.control('', [Validators.required, Validators.maxLength(60), Validators.pattern(/^[a-zA-Z -]+$/)]),
      Email: this.fb.control('', [Validators.required, Validators.email]),
      Hire_date: this.fb.control(new Date()),
      Salary: this.fb.control('', [Validators.required, Validators.max(100000)]),
      Job_Title: this.fb.control('', [Validators.required, Validators.maxLength(60), Validators.pattern(/^[a-zA-Z -]+$/)])
    })
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.employeesForm.controls[controlName].hasError(errorName);
  }
  
  create(): void {
    console.log(this.employeesForm.value)
    this.employeeService.create(
      this.projectId, 
      this.employeesForm.value
    ).subscribe((addedEmployee) => {
      this.employeeChanged.emit({
        employee: {...addedEmployee},
        type: "CREATE"
      })
    })
  }

  close(): void {
    this.dialogRef.close()
  }
}