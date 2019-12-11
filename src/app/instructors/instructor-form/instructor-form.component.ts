import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Instructor } from '../../models/instructor'
import { InstructorService } from '../../services/instructor/instructor.service'

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css'],
})
export class InstructorFormComponent implements OnChanges {
  @Input() instructor: Instructor
  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private instructorService: InstructorService
  ) {
    this.formGroup = this.buildForm()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.instructor) {
      if (changes.instructor.previousValue !== changes.instructor.currentValue) {
        if (this.instructor && this.instructor.id) {
          const value = {
            ...this.instructor,
          }
          delete value.id
          this.formGroup.patchValue(value)
        } else {
          this.formGroup.reset()
        }
      }
    }
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/\d{3}-\d{3}-\d{4}/)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      office: ['', [Validators.required]],
    })
  }

  showError(fieldName: string, errorKey: string): boolean {
    const field = this.formGroup.get(fieldName)
    return field.touched && field.hasError(errorKey)
  }

  onSubmit() {
    if (this.instructor && this.instructor.id) {
      this.instructorService
        .update({ ...this.formGroup.value, id: this.instructor.id })
        .subscribe()
    } else {
      this.instructorService.create(this.formGroup.value).subscribe()
    }
  }
}
