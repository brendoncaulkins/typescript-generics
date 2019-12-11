import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import { Student } from '../../models/student'
import { StudentService } from '../../services/student/student.service'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements AfterViewInit {
  @Output() editStudent = new EventEmitter<Student>()

  tableColumns: string[] = ['name', 'majors', 'actions']

  dataSource: MatTableDataSource<Student>

  @ViewChild(MatSort, { static: false }) sort: MatSort

  constructor(private studentService: StudentService) {
    this.dataSource = new MatTableDataSource([])
    this.studentService.fetchAll().subscribe(data => (this.dataSource.data = data))
  }

  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (student, property) => {
      switch (property) {
        case 'name':
          return student.firstName
        case 'majors':
          return student.majors[0]
        case 'minors':
          return student.minors[0]
        default:
          return student[property]
      }
    }
    this.dataSource.sort = this.sort
  }

  onDelete(student: Student) {
    this.studentService.delete(student).subscribe()
  }
}
