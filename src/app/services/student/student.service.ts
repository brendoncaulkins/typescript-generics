import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from '../../../environments/environment'
import { Student } from '../../models/student'
import { BaseCrudService } from '../base-crud/base-crud.service'

@Injectable({
  providedIn: 'root',
})
export class StudentService extends BaseCrudService<Student> {
  readonly endpoint = 'students'
  readonly url = `${environment.apiUrl}/${this.endpoint}`

  constructor(protected http: HttpClient) {
    super(http)
  }
}
