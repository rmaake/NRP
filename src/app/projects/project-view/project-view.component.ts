import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Projects } from '../../classes/projects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Projects;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(project => this.project = project);
  }

}
