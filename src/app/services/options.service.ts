import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Options } from '../classes/options';
import { OPTIONS } from '../mock-options';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor() { }

  getOptions(): Observable<Options[]> {
    return of(OPTIONS);
  }
}
