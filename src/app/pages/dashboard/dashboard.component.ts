import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;

  constructor() {
    this.chartConfig = {
      width: '900',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
      theme: "ocean",
      bgColor: "#efefef",
  };

  this.dataSource = {
      "chart": {
        "xAxisName": "Month",
        "yAxisName": "Feedback",
        "theme": "gammel",
      },
      "data": [{
        "label": "January",
        "value": "4"
      }, {
        "label": "February",
        "value": "3"
      }, {
        "label": "March",
        "value": "3"
      }, {
        "label": "April",
        "value": "4"
      }, {
        "label": "May",
        "value": "4"
      }, {
        "label": "June",
        "value": "3"
      }, {
        "label": "July",
        "value": "3"
      }, {
        "label": "August",
        "value": "4"
      }, {
        "label": "September",
        "value": "3"
      }, {
        "label": "October",
        "value": "3"
      }, {
        "label": "November",
        "value": "5"
      }, {
        "label": "December",
        "value": "4"
      }]
    };

    
   }


   
  ngOnInit() {
  }

}
