import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

import { Instructor } from '../models/instructor'

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
})
export class InstructorsComponent implements OnInit {
  editInstructor$ = new Subject<Instructor>()

  constructor() {}

  ngOnInit() {}
}
