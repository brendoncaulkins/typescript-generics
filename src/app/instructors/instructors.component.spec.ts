import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { InstructorService } from '../services/instructor/instructor.service'
import { InstructorFormComponent } from './instructor-form/instructor-form.component'
import { InstructorListComponent } from './instructor-list/instructor-list.component'
import { InstructorsComponent } from './instructors.component'

describe('InstructorsComponent', () => {
  let component: InstructorsComponent
  let fixture: ComponentFixture<InstructorsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstructorsComponent,
        InstructorFormComponent,
        InstructorListComponent,
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [InstructorService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
