import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'
import { Student } from '../../models/student'

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  readonly endpoint = 'students'
  readonly url = `${environment.apiUrl}/${this.endpoint}`

  constructor(private http: HttpClient) {}

  fetch(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url)
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student)
  }

  update(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.url}/${student.id}`, student)
  }

  delete(student: Student): Observable<{}> {
    return this.http.delete(`${this.url}/${student.id}`)
  }
}
