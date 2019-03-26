import { Component, OnInit, ViewChild } from '@angular/core';

import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';
import { ChildMessageComponent } from './send-email.module';

import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";

@Component({
  selector: 'app-employee-events',
  templateUrl: './employee-events.component.html',
  styleUrls: ['./employee-events.component.css']
})
export class EmployeeEventsComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowData;
  private paginationPageSize;

  constructor(private http: HttpClient) { 
    this.columnDefs = [
      {
        headerName: "Event name",
        field: "eventName", sortable: true, filter: true
      },
      {
        headerName: "Employee ID",
        field: "employeeId", sortable: true, filter: true
      },
      {
        headerName: "Employee name",
        field: "employeeName", sortable: true, filter: true
      },
      {
        headerName: "Business unit",
        field: "businessUnit", sortable: true, filter: true
      },
      {
        headerName: "Feedback provided",
        field: "feedbackProvided", sortable: true, filter: true
      },
      {
        headerName: "Feedback details",
        field: "feedbackDetails", sortable: true, filter: true
      },
      {headerName: 'Trigger Email', field: 'triggerEmail', cellRendererFramework: ChildMessageComponent},
      {headerName: 'Trigger Reply Email', field: 'triggerReplyEmail', cellRendererFramework: ChildMessageComponent}
    ];

    this.defaultColDef = {
      width: 100,
      headerCheckboxSelection: isFirstColumn,
      checkboxSelection: isFirstColumn,
      resizable: true
    };
    this.rowSelection = "multiple";
    this.paginationPageSize = 15;
  }

  ngOnInit() {
  }

  onBtExport() {
    var params = {
      skipHeader: false,
      columnGroups: false,
      skipFooters: false,
      skipGroups: false,
      skipPinnedTop: false,
      skipPinnedBottom: false,
      allColumns: false,
      onlySelected: true,
      fileName: "employee_events",
      sheetName: "employee events",
      exportMode: "xlsx"
    };
    
    this.gridApi.exportDataAsExcel(params);
  }
  

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
    this.rowData = EmployeeEventsComponent.createRowData();

    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  private static createRowData() {
    return [
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '450077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'}
    ];
  }

  refreshData(data) {
    console.log("as      "+data);
    this.rowData = [
      { eventName: 'BansgofgJoygDistributoi', employeeId: '310077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'},
      { eventName: 'BansgofgJoygDistributoi', employeeId: '450077', employeeName: 'Sivaleela Chamarthi', businessUnit: 'Banking & Financial Services', feedbackProvided: 'Yes', feedbackDetails: 'Good'}];    
  }
}

function isFirstColumn(params) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}

function getBooleanValue(cssSelector) {
  return document.querySelector(cssSelector).checked === true;
}