async function fetchGraphQL(
  operationsDoc,
  operationName,
  variables,
  poochToken
) {
  const result = await fetch("https://dev-graphql.poochapp.net/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${poochToken}`,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

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

function fetchGetGroomer(poochToken) {
  return fetchGraphQL(operationsDoc, "getGroomer", {}, poochToken);
}

export async function startFetchGetGroomer(poochToken) {
  const { errors, data } = await fetchGetGroomer(poochToken);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  return data;
}
