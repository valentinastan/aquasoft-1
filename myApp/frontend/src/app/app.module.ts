import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeTableRowComponent } from './employee-table-row/employee-table-row.component';
import { EmployeeCreateFormComponent } from './employee-create-form/employee-create-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    EmployeesComponent,
    EmployeeTableRowComponent,
    EmployeeCreateFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'projects', component: ProjectsComponent},
      {path: 'employees/:id', component: EmployeesComponent},
      {path: '', redirectTo: '/projects', pathMatch: 'full'},
    ]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
