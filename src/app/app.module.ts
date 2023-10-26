import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'employees', component: EmployeeListComponent},
      {path: 'add-employee', component: EmployeeDetailComponent},
      {path: 'welcome', component: EmployeeListComponent},
      {path: '', redirectTo:'employee', pathMatch:'full'},
      {path: '*', redirectTo: 'employee', pathMatch:'full'},
      {path: '**', redirectTo: 'employee', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
