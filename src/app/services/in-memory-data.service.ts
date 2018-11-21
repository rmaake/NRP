import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Projects } from '../classes/projects';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const projects = [
      { id: 1, name: 'FNB: Office Refurbishment', active: false },
      { id: 2, name: 'FNB: Paint Job', active: true },
      { id: 3, name: 'Absa: Dry-wall partitioning', active: true },
      { id: 4, name: 'Tesla: Demolishing', active: false },
      { id: 5, name: 'CashnCarry: Office Refurbishment', active: false },
      { id: 6, name: 'Urban Ocean: Tenant Installations', active: true }
    ];
    return {projects};
  }

  genId(projects: Projects[]): number {
    return projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 6;
  }

}
