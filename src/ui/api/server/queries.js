export const GET_GROOMERS = `
    query getGroomer {
        id
        uuid
        businessName: business_name
        signUpStatus: sign_up_status
        status
        pickup      : offered_pick_up
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
        }
    }
`;

export const GET_BOOKING = `
    query getBooking {
        booking(where: {deleted: {_eq: false}}) {
            approved_at
            booked_at
            booking_cost
            booking_fee
            cancel_user_id
            cancel_user_type
            cancellation_non_refunded_amount
            cancellation_refunded_amount
            cancelled_at
            checked_in
            checked_in_at
            checked_out
            checked_out_at
            deleted
            disapproved_at
            drop_off_cost
            drop_off_date_time
            end_date_time
            groomer_id
            id
            parent_id
            payment_method_bank
            payment_method_brand
            payment_method_id
            payment_method_last4
            payment_method_name
            payment_method_type
            payment_method_uuid
            pick_up_cost
            pick_up_date_time
            start_date_time
            status
            stripe_fee
            stripe_payment_intent_id
            stripe_payment_intent_transfer_id
            stripe_payment_method_id
            total_amount
            total_charge_at_booking
            total_charge_at_drop_off
            uuid
            groomer {
              business_name
              offered_pick_up
              offered_drop_off
              charge_per_mile
              uuid
              id
              s3files {
                main_profile_image
                url
                uuid
              }
            }
        }
    }
`;