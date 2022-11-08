import React from 'react';
import * as styled from './Management.styled';
import MANAGEMENT_IMAGE from '../../../../../assets/images/landing/business-management.png';
import { COLOR } from '../../../../../assets/colors';

import { AiFillCheckCircle } from 'react-icons/ai';

type Props = {};


export const Management: React.FC<Props> = () => {
    return (
        <styled.Container id="management">
            <styled.DescriptionContainer>
                <styled.Description>MANAGEMENT.</styled.Description>
                <styled.Title>Business <span style={{ color: COLOR.primary0 }}>Management Features</span></styled.Title>
                <styled.ListWrapper>
                    <styled.ListRow>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Pooch profile and intake form
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Client management
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Instant bookings
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Machine learning SMS integration and automation
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Cloud storage and data security
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Payroll and Employee management
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Add multiple users and set user permissions
                        </styled.List>
                    </styled.ListRow>
                    <styled.ListRow>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Analytics and QuickBooks integration
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            QuickBooks Connect
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            POS hardware
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Stripe Integration
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Text to pay
                        </styled.List>
                        <styled.List>
                            <styled.IconContainer>
                                <AiFillCheckCircle color={COLOR.primary0} size={24} />
                            </styled.IconContainer>
                            Calendar integration
                        </styled.List>
                    </styled.ListRow>
                </styled.ListWrapper>
                <styled.ListButton>
                    SIGN UP
                </styled.ListButton>
            </styled.DescriptionContainer>
            <styled.ImageContainer>
                <styled.Image src={MANAGEMENT_IMAGE} alt="management" />
            </styled.ImageContainer>
        </styled.Container>
    )
}