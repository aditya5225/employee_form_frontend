import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EmplyeeListComponent } from './pages/emplyee-list/emplyee-list.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxPipe } from './search-box.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmplyeeListComponent, 
    SearchBoxPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // NgbModule,
    HttpClientModule,
    FormsModule,

    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
