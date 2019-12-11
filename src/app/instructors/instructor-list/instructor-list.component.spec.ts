import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../../material.module'
import { InstructorService } from '../../services/instructor/instructor.service'
import { InstructorListComponent } from './instructor-list.component'

describe('InstructorListComponent', () => {
  let component: InstructorListComponent
  let fixture: ComponentFixture<InstructorListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorListComponent],
      imports: [MaterialModule, NoopAnimationsModule, HttpClientTestingModule],
      providers: [InstructorService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
