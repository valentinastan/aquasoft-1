import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees-service/employees.service';
import { Employee } from '../types/employee';
import { Project } from '../types/project';
import { MatDialog } from '@angular/material/dialog'
import { EmployeeCreateFormComponent } from '../employee-create-form/employee-create-form.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // @Input('project') project: Project
  public employees: Employee[]
  public projectId: number

  constructor(
    private employeeService: EmployeesService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.projectId = params.id);
    this.employeeService.getEmployees(this.projectId).subscribe((employees => this.employees = employees))
  }

  employeeChangedHandler(employeeEvent) {
    switch(employeeEvent.type) {
      case "UPDATE" :
         this.updateOnTime(employeeEvent.employee);
         break;
      case "DELETE" :
        this.deleteOnTime(employeeEvent.employeeId);
        break;
    }
  }

  updateOnTime(updatedEmployee: Employee) {
    this.employees = this.employees.map(employee => {
      if(employee.id === updatedEmployee.id) {
        employee = {...updatedEmployee, Project_id: employee.Project_id}
        return employee
      }
      else return employee
    })
  }

  deleteOnTime(employeeId: number) {
    console.log(this.employees)
    this.employees = this.employees.filter(employee => employee.id !== employeeId)
    console.log(this.employees)
  }

  openDialog() {
    const dialogRef = this.dialog.open(
      EmployeeCreateFormComponent,
      {data: {
        route: this.activatedRoute
      }});

    dialogRef.componentInstance.employeeChanged.subscribe((receivedEntry) => {
      this.employees.push(receivedEntry.employee),
      this.dialog.closeAll()
      })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
