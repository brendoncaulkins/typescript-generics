import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatChipInputEvent } from '@angular/material/chips'

import { Student } from '../../models/student'
import { StudentService } from '../../services/student/student.service'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnChanges {
  @Input() student: Student
  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
    this.formGroup = this.buildForm()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.student) {
      if (changes.student.previousValue !== changes.student.currentValue) {
        if (this.student && this.student.id) {
          const value = {
            ...this.student,
            majors: [...this.student.majors],
            minors: [...this.student.minors],
          }
          delete value.id
          this.formGroup.patchValue(value)
        } else {
          this.formGroup.reset()
          this.formGroup.get('majors').setValue([])
          this.formGroup.get('minors').setValue([])
        }
      }
    }
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/\d{3}-\d{3}-\d{4}/)]],
      email: ['', [Validators.required, Validators.email]],
      majors: [[], [Validators.required, Validators.minLength(1)]],
      minors: [[], [Validators.required, Validators.minLength(1)]],
    })
  }

  showError(fieldName: string, errorKey: string): boolean {
    const field = this.formGroup.get(fieldName)
    return field.touched && field.hasError(errorKey)
  }

  add(event: MatChipInputEvent, arrayName: string): void {
    const input = event.input
    const value = event.value

    // Add the item
    if ((value || '').trim()) {
      const values = this.formGroup.get(arrayName).value
      values.push(value.trim())
      this.formGroup.get(arrayName).setValue(values)
    }

    // Reset the input value
    if (input) {
      input.value = ''
    }
  }

  remove(item: string, arrayname: string): void {
    const values = this.formGroup.get(arrayname).value
    const index = values.indexOf(item)

    if (index >= 0) {
      values.splice(index, 1)
      this.formGroup.get(arrayname).setValue(values)
    }
  }

  onSubmit() {
    if (this.student && this.student.id) {
      this.studentService
        .update({ ...this.formGroup.value, id: this.student.id })
        .subscribe()
    } else {
      this.studentService.create(this.formGroup.value).subscribe()
    }
  }
}
