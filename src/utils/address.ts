import { Draft } from "types"
import { Address } from "types/address"

export interface AddressComponent {
  long_name: string
  short_name: string
  types: string[]
}

export interface Location {
  lat: () => number
  lng: () => number
}

export interface Geometry {
  location: Location
}

export interface GooglePlace {
  address_components: AddressComponent[]
  formatted_address: string
  geometry: Geometry
  place_id: string
}

export const getAddressFromGooglePlace = (place: GooglePlace): Draft<Address> | null => {
  const getNameByType = (type: string) => {
    for (const { long_name, types } of place.address_components) {
      if (types.includes(type)) {
        return long_name
      }
    }

    return ""
  }

  const streetNumber = getNameByType("street_number")

  if (!streetNumber) {
    return null
  }

  return {
    street: `${streetNumber} ${getNameByType("route")}`,
    city: getNameByType("locality"),
    state: getNameByType("administrative_area_level_1"),
    zipcode: getNameByType("postal_code"),
    country: getNameByType("country"),
    latitude: place.geometry.location.lat(),
    longitude: place.geometry.location.lng(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }
}
