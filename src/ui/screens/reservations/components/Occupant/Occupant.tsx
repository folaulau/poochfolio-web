import React, { useState } from 'react';
import * as styled from './Occupant.styled';
import { AiTwotoneEdit } from 'react-icons/ai';
import DOG from '../../../../../assets/images/sample/dog.jpeg';
import { COLOR } from '../../../../../assets/colors';
import { shortName } from '../../../../../utils/shortName';
import { formateDate } from '../../../../../utils/formatDate';

type Props = {
    groomer: {
        business_name: string,
        instant_booking: boolean,
        s3files: {
            url: string,
        }[]
    },
    booking_care_services: {
        toCareService: {
            name: string
        }
    }[],
    status: string,
    start_date_time: Date,
    end_date_time: Date,
    total_amount: number,
    current: boolean,
    checked_in: boolean | null,
    checked_out: boolean | null,
    onCheckIn: () => void,
    onCheckOut: () => void,
    onAccept: () => void
};

export const Occupant: React.FC<Props> = ({
    groomer,
    booking_care_services,
    status,
    start_date_time,
    end_date_time,
    total_amount,
    current,
    checked_in,
    checked_out,
    onCheckIn,
    onCheckOut,
    onAccept
}) => {
    const [imageError, setImageError] = useState(false);

    return (
        <styled.Container>
            <styled.InfoContainer>
                <styled.Avatar
                    src={imageError ? DOG : groomer.s3files && groomer.s3files.length > 0 ? groomer.s3files[0].url : DOG}
                    alt="occupant-dog"
                    onError={() => { setImageError(true) }}
                />
                <styled.Text>{shortName(groomer.business_name, 17)}</styled.Text>
            </styled.InfoContainer>
            <styled.Divider />
            <styled.CheckContainer>
                <styled.Services>
                    <styled.Text>{booking_care_services.length > 0 ? booking_care_services[0].toCareService.name : ''}</styled.Text>
                    <styled.SText>{formateDate(start_date_time, end_date_time)}</styled.SText>
                </styled.Services>
                <styled.CheckTool>
                    {!checked_in && (<styled.CheckButton onClick={onCheckIn}>Check In</styled.CheckButton>)}
                    {checked_in && !checked_out && (<styled.CheckButton onClick={onCheckOut}>Check Out</styled.CheckButton>)}
                    {checked_in && checked_out && (<styled.CheckButton>Checked Out</styled.CheckButton>)}
                    {!groomer.instant_booking && status === 'PENDING_GROOMER_APPROVAL' && (<styled.CheckButton onClick={onAccept}>Accept Booking</styled.CheckButton>)}
                </styled.CheckTool>
            </styled.CheckContainer>
            <styled.PaymentContainer>
                <styled.CheckTool>
                    <styled.PaymentLinkButton>Send Payment Link</styled.PaymentLinkButton>
                    <styled.CollectButton>Collect Payment</styled.CollectButton>
                </styled.CheckTool>
                <styled.CheckTool>
                    <styled.Edit>
                        <AiTwotoneEdit color={COLOR.primary0} size={24} />
                    </styled.Edit>
                    <styled.Amount>
                        <span>Unpaid</span>
                        <span>${total_amount}</span>
                    </styled.Amount>
                </styled.CheckTool>
            </styled.PaymentContainer>
        </styled.Container>
    )
}