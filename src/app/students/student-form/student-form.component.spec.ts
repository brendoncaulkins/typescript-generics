import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../../material.module'
import { StudentService } from '../../services/student/student.service'
import { StudentFormComponent } from './student-form.component'

describe('StudentFormComponent', () => {
  let component: StudentFormComponent
  let fixture: ComponentFixture<StudentFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFormComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [StudentService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
