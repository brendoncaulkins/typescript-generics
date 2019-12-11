import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { StudentService } from '../services/student/student.service'
import { StudentFormComponent } from './student-form/student-form.component'
import { StudentListComponent } from './student-list/student-list.component'
import { StudentsComponent } from './students.component'

describe('StudentsComponent', () => {
  let component: StudentsComponent
  let fixture: ComponentFixture<StudentsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent, StudentFormComponent, StudentListComponent],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [StudentService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
