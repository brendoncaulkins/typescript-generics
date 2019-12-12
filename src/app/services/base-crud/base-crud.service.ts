import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BaseItem } from 'src/app/models/base-item'

@Injectable({
  providedIn: 'root',
})
export abstract class BaseCrudService<T extends BaseItem> {
  abstract readonly endpoint: string
  abstract readonly url: string

  constructor(protected http: HttpClient) {}

  fetchAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url)
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`)
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.url, item)
  }

  update(item: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${item.id}`, item)
  }

  delete(item: T): Observable<{}> {
    return this.http.delete(`${this.url}/${item.id}`)
  }
}
