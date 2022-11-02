export const getAddress = (addresses: any) => {
    if(!addresses) {
        return ''
    }
    let { city, state, country, street, street2, zipcode } = addresses;
    let newAddress = '';
    if(street) {
        newAddress += street
    }
    if(street2) {
        newAddress = newAddress + ', ' + street2
    }
    if(city) {
        newAddress = newAddress + ', ' + city
    }
    if(state) {
        newAddress = newAddress + ', ' + state
    }
    if(country) {
        newAddress = newAddress + ', ' + country
    }
    if(zipcode) {
        newAddress = newAddress + ', ' + zipcode
    }

    return newAddress
}