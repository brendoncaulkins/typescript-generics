import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'
import { Instructor } from '../../models/instructor'

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  readonly endpoint = 'instructors'
  readonly url = `${environment.apiUrl}/${this.endpoint}`

  constructor(private http: HttpClient) {}

  fetch(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.url)
  }

  create(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.url, instructor)
  }

  update(instructor: Instructor): Observable<Instructor> {
    return this.http.put<Instructor>(`${this.url}/${instructor.id}`, instructor)
  }

  delete(instructor: Instructor): Observable<{}> {
    return this.http.delete(`${this.url}/${instructor.id}`)
  }
}
