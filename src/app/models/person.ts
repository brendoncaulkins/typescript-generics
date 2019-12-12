import { BaseItem } from './base-item'

export interface Person extends BaseItem {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
}
