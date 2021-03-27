import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../types/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[]

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects => this.projects = projects))
  }

}
