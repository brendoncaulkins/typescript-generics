import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../../material.module'
import { InstructorService } from '../../services/instructor/instructor.service'
import { InstructorFormComponent } from './instructor-form.component'

describe('InstructorFormComponent', () => {
  let component: InstructorFormComponent
  let fixture: ComponentFixture<InstructorFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorFormComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      providers: [InstructorService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
