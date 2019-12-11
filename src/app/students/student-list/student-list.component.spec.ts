import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../../material.module'
import { StudentService } from '../../services/student/student.service'
import { StudentListComponent } from './student-list.component'

describe('StudentListComponent', () => {
  let component: StudentListComponent
  let fixture: ComponentFixture<StudentListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListComponent],
      imports: [MaterialModule, NoopAnimationsModule, HttpClientTestingModule],
      providers: [StudentService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
