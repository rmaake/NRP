import { Component, OnInit } from '@angular/core';

import { Projects } from '../../classes/projects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css', '../../dashboard/dashboard.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Projects[];
  selectedProject: Projects;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  onSelect(project: Projects): void {
    this.selectedProject = project;
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe(projects => this.projects = projects);
  }
}
