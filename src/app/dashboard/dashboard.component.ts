import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  containers = [
    {
      title: 'TypeScript',
      type: 1
    },
    {
      title: 'Angular2',
      type: 2
    },
    {
      title: 'Weather',
      type: 3
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
