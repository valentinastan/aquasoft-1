import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './types/project';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private backendService: BackendService) { }

  getProjects() : Observable<Project[]> {
    return this.backendService.get<Project>("projects");
  }
}
