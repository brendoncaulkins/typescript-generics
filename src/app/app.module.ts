import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InstructorsComponent } from './instructors/instructors.component'
import { MaterialModule } from './material.module'
import { NavComponent } from './nav/nav.component'
import { StudentFormComponent } from './students/student-form/student-form.component'
import { StudentListComponent } from './students/student-list/student-list.component'
import { StudentsComponent } from './students/students.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StudentsComponent,
    InstructorsComponent,
    StudentFormComponent,
    StudentListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StudentFormComponent, StudentListComponent],
})
export class AppModule {}
