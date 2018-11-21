import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Projects } from '../classes/projects';
// import { PROJECTS } from '../mock-projects';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application:json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'api/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    // return of(PROJECTS);
    return this.http.get<Projects[]>(this.projectsUrl).pipe(
        tap(_ => console.log('Fetched heros')),
        catchError(this.handleError('getProjects', []))
      );
  }

  getProjectOrUndef(id: number): Observable<Projects> {
    // return of(PROJECTS.find(projects => projects.id === id));
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Projects>(url).pipe(
        map(projects => projects[0]),
        tap(val => {
          const outcome = val ? `fetched` : `did not find`;
          console.log(`${outcome} project id=${id}`);
        }),
        catchError(this.handleError<Projects>(`getProjectOrUndef id=${id}`))
      );
  }

  getProject(id: number): Observable<Projects> {
    // return of(PROJECTS.find(projects => projects.id === id));
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Projects>(url).pipe(
      tap(_ => console.log(`fetched project id=${id}`)),
      catchError(this.handleError<Projects>(`getProject id ${id}`))
    );
  }

  searchProjects(term: string): Observable<Projects[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.projectsUrl}/?name=${term}`;
    return this.http.get<Projects[]>(url).pipe(
      tap(_ => console.log(`found projects matching "${term}"`)),
      catchError(this.handleError<Projects[]>('searchProjects', []))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
