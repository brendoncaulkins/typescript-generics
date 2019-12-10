import { Person } from './person'

export interface Student extends Person {
  majors: string[]
  minors: string[]
}
