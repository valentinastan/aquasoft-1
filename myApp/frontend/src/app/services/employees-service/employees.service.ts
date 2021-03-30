import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend-service/backend.service';
import { Employee } from '../../types/employee';

interface EmployeeUpdateData {
  name: string;
  email: string;
  hireDate: Date;
  salary: number;
  jobTitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private backendService: BackendService) { }

  getEmployees(projectId: number) : Observable<Employee[]> {
    return this.backendService.get<Employee>(`employees/${projectId}`);
  }

  update(
    projectId: number,
    employeeId: number,
    body: EmployeeUpdateData
  ) : Observable<Employee> {
    return this.backendService.put<Employee>(
      `employees/${projectId}/${employeeId}`,
      body
    )
  }

  create(
    projectId: number,
    body: EmployeeUpdateData
  ) : Observable<Employee> {
    return this.backendService.post<Employee>(
      `employees/${projectId}`,
      body
    )
  }

  delete(employeeId: number) : Observable<Employee> {
    return this.backendService.delete<Employee>(`employees/${employeeId}`)
  }
}
