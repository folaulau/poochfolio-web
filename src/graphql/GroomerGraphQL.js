import axios from 'axios';

var instance = axios.create({
  baseURL: process.env.REACT_APP_GRAPHQL_URL
});

const GroomerGraphql = {

  getProfile: () => {
    const operationsDoc = `
      query getGroomer {
        groomer {
          id
          uuid
          email
          emailVerified: email_verified
          phoneNumber: phone_number
          phoneNumberVerified: phone_number_verified
          chargePerMile: charge_per_mile
          businessName: business_name
          description
          firstName: first_name
          lastName: last_name
          listing
          offeredDropOff: offered_drop_off
          signUpStatus: sign_up_status
          status
          rating
          offeredPickUp: offered_pick_up
          numberOfOccupancy: number_of_occupancy
          instantBooking: instant_booking
          emailTemp: email_temp
          createdAt: created_at
          updatedAt: updated_at
          addresses {
              id
              uuid
              city
              state
              country
              street
              street2
              timezone
              primary: primary_address
              longitude
              latitude
              zipcode
              updatedAt: updated_at
              createdAt: created_at
          }
          careServices: care_services(where: {deleted: {_eq: false}}) {
            id
            uuid
            name
            description
            serviceSmall: service_small
            smallPrice: small_price
            serviceMedium: service_medium
            mediumPrice: medium_price
            serviceLarge: service_large
            largePrice: large_price
            updatedAt: updated_at
            createdAt: created_at
          }
          documents: s3files(where: {deleted: {_eq: false}}) {
            fileName: file_name
            fileType: file_type
            id
            url
            uuid
            isPublic: is_public
            createdAt: created_at
            mainProfileImage: main_profile_image
          }
        }
      }
    `;
    let request = {};
    request.query = operationsDoc;
    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem('poochToken')
      }
    };
    return instance.post("", JSON.stringify(request), options);
  },
  getOnlyProfile: () => {
    const operationsDoc = `
      query getOnlyProfileGroomer {
        groomer {
          id
          uuid
          phoneNumber: phone_number
          businessName: business_name
          description
          firstName: first_name
          lastName: last_name
          email
          signUpStatus: sign_up_status
          status
          createdAt: created_at
          updatedAt: updated_at
          addresses {
              id
              uuid
              city
              state
              country
              street
              street2
              timezone
              primary: primary_address
              longitude
              latitude
              zipcode
              updatedAt: updated_at
              createdAt: created_at
          }
          careServices: care_services(where: {deleted: {_eq: false}}) {
            id
            uuid
            name
            description
            updatedAt: updated_at
            createdAt: created_at
          }
        }
      }
    `;
    let request = {};
    request.query = operationsDoc;
    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem('poochToken')
      }
    };
    return instance.post("", JSON.stringify(request), options);
  }
}

export default GroomerGraphql;