import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { Employee } from './types/employee';

interface EmployeeUpdateData {
  name: string;
  email: string;
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
}
