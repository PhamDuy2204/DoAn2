import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassComponent } from './classes/class/class.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { MonhocsComponent } from './monhocs/monhocs.component';
import { MonhocComponent } from './monhocs/monhoc/monhoc.component';
import { MonhocListComponent } from './monhocs/monhoc-list/monhoc-list.component';
import { StudentService } from './shared/student.service';
import { ClassService } from './shared/class.service';
import { MonhocService } from './shared/monhoc.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    ClassesComponent,
    ClassComponent,
    ClassListComponent,
    MonhocsComponent,
    MonhocComponent,
    MonhocListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [StudentService, ClassService, MonhocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
