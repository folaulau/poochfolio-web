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
            offered_drop_off: offered_drop_off
            numberOfOccupancy: number_of_occupancy
            instantBooking: instant_booking
            emailTemp: email_temp
            createdAt: created_at
            updatedAt: updated_at
            careServices: care_services {
                id
                uuid
                name
                description
                service_small
                small_price
                service_large
                service_medium
                updated_at
                medium_price
                large_price
            }
            documents: s3files {
                fileName: file_name
                fileType: file_type
                id
                url
                uuid
                isPublic: is_public
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