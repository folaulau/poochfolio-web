import { Address } from "./address"
import { CareService } from "./careService"

export interface User {
  id: number
  uuid: string
  firstName: string
  lastName: string
  businessName: string
  email: string
  emailVerified: boolean
  emailTemp: boolean
  phoneNumber: number
  phoneNumberVerified: boolean
  rating: number
  offeredPickUp: boolean
  offeredDropOff: boolean
  chargePerMile: number
  numberOfOccupancy: number
  description: string
  instantBooking: boolean
  signUpStatus: string
  status: string
  careServices: CareService[]
  createdAt: string
  updatedAt: string
  address: Address
  listing: boolean
  openTime: string
  closeTime: string
  operateMonday: boolean
  operateTuesday: boolean
  operateWednesday: boolean
  operateThursday: boolean
  operateFriday: boolean
  operateSaturday: boolean
  operateSunday: boolean
}
