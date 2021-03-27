import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../types/employee';
import { Project } from '../types/project';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: Employee[]
  @Input('project') project: Project

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees(this.project.id).subscribe((employees => this.employees = employees))
  }

}
