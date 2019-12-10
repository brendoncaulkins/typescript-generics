import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InstructorsComponent } from './instructors/instructors.component'
import { MaterialModule } from './material.module'
import { NavComponent } from './nav/nav.component'
import { StudentsComponent } from './students/students.component'

@NgModule({
  declarations: [AppComponent, NavComponent, StudentsComponent, InstructorsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
