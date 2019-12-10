import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { InstructorsComponent } from './instructors/instructors.component'
import { StudentsComponent } from './students/students.component'

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'instructors', component: InstructorsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
