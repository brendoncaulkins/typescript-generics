import { Person } from './person'

export interface Instructor extends Person {
  department: string
  office: string
}
