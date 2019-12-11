import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import { Instructor } from '../../models/instructor'
import { InstructorService } from '../../services/instructor/instructor.service'

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css'],
})
export class InstructorListComponent implements AfterViewInit {
  @Output() editInstructor = new EventEmitter<Instructor>()
  @Output() deleteInstructor = new EventEmitter<Instructor>()

  tableColumns: string[] = ['name', 'email', 'office', 'actions']

  dataSource: MatTableDataSource<Instructor>

  @ViewChild(MatSort, { static: false }) sort: MatSort

  constructor(private instructorService: InstructorService) {
    this.dataSource = new MatTableDataSource([])
    this.instructorService.fetchAll().subscribe(data => (this.dataSource.data = data))
  }

  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (instructor, property) => {
      switch (property) {
        case 'name':
          return instructor.firstName
        default:
          return instructor[property]
      }
    }
    this.dataSource.sort = this.sort
  }

  onDelete(instructor: Instructor) {
    this.instructorService.delete(instructor).subscribe()
  }
}
