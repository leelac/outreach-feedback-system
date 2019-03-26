import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;  
  public minDate: Date = new Date(2019, 3, 7);
  public maxDate: Date = new Date(2019, 4, 27)

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
        "theme": "fusion",
        "palettecolors":"#81d1ef",
        "usePlotGradientColor": "1",
        "plotGradientColor":"#deeef4",
        "bgColor": "#e6f1f2",
        "bgAlpha": "50",
        "labelDisplay": "rotate",
        "slantLabel": "1",
        "labelFontBold":"1",
        "labelFont": "Arial",
        "baseFont": "Arial",
        "baseFontSize": "14",
        "outCnvBaseFont": "Arial",
        "outCnvBaseFontSize": "14"
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

  refreshChart(startDate: any, endDate: any){
    var datePipe = new DatePipe("en-US");
    console.log("Stardate:" + datePipe.transform(startDate, 'dd-MM-yyyy'));
  }

  refreshData(data) {
    console.log("as"+data);
  }

}
