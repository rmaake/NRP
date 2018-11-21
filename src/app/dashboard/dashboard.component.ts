import { Component, OnInit } from '@angular/core';

import { Options } from '../classes/options';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  options: Options[];

  constructor(private optionService: OptionsService) { }

  ngOnInit() {
    this.getOptions();
  }

  getOptions(): void {
    this.optionService.getOptions().subscribe(options => this.options = options);
  }

}
