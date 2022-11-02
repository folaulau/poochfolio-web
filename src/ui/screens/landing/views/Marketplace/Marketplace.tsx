import React from 'react';
import * as styled from './Marketplace.styled';
import MOBILE from '../../../../../assets/images/landing/iphone-mobile.png';
import { COLOR } from '../../../../../assets/colors';

import { AiFillCheckCircle } from 'react-icons/ai';

type Props = {};


export const Marketplace: React.FC<Props> = () => {
    return (
        <styled.Container id="marketplace">
            <styled.ImageContainer>
                <styled.Image src={MOBILE} alt="marketplace" />
            </styled.ImageContainer>
            <styled.DescriptionContainer>
                <styled.Description>STOP WORRYING ABOUT VACANCY.</styled.Description>
                <styled.Title><span style={{ color: COLOR.primary0 }}>The Pooch Marketplace</span> has you covered!</styled.Title>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    Direct listing on the Pooch Marketplace
                </styled.List>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    Dog leads for Groomers, Daycares and Kennels.
                </styled.List>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    Instant bookings for dog hotels seeking minumum vacancy.
                </styled.List>
                <styled.List>
                    <styled.IconContainer>
                        <AiFillCheckCircle color={COLOR.primary0} size={24} />
                    </styled.IconContainer>
                    Pick-up and drop-off made easy with our custm software.
                </styled.List>
                <styled.ListButton>
                    LIST YOUR BUSINESS ON OUR MARKETPLACE
                </styled.ListButton>
            </styled.DescriptionContainer>
        </styled.Container>
    )
}