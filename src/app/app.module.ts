import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavigatorComponent } from './components/left-navigator/left-navigator.component';

import {HttpClientModule} from "@angular/common/http";
import { AddressesService } from './services/addresses.service';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)

import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { EmployeeEventsComponent } from './pages/employee-events/employee-events.component';
import { AgGridModule } from 'ag-grid-angular';
import { ChildMessageComponent } from './pages/employee-events/send-email.module';
import { AddressSelectorComponent } from './components/address-selector/address-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavigatorComponent,
    EmployeeEventsComponent,
    ChildMessageComponent,
    AddressSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionChartsModule,
    HttpClientModule,
    DatePickerModule, 
    AgGridModule.withComponents([
      ChildMessageComponent
    ])
  ],
  providers: [AddressesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
