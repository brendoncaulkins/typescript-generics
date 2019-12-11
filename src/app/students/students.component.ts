import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

import { Student } from '../models/student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  editStudent$ = new Subject<Student>()

  constructor() {}

  ngOnInit() {}
}
