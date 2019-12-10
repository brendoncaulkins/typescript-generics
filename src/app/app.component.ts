import { Component } from '@angular/core'

import { InstructorService } from './services/instructor/instructor.service'
import { StudentService } from './services/student/student.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typescript-generics'

  constructor(
    private studentService: StudentService,
    private instructorService: InstructorService
  ) {
    this.studentService.getById(1).subscribe(console.log)
    this.instructorService.getById(1).subscribe(console.log)
  }
}
