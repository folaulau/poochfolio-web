import React from 'react';
import * as styled from './HowItWork.styled';
import HOW_IMG1 from '../../../../../assets/images/landing/how-it-works-1.svg';
import HOW_IMG2 from '../../../../../assets/images/landing/how-it-works-2.svg';
import HOW_IMG3 from '../../../../../assets/images/landing/how-it-works-3.svg';
import { useNavigate } from 'react-router-dom';

type Props = {};

export const HowItWork: React.FC<Props> = () => {
    const navigate = useNavigate();

    const goSignup = () => {
        navigate('/signup')
    }

    return (
        <styled.Container id="how-it-work">
            <styled.Title>How It Works</styled.Title>
            <styled.Wrapper>
                <styled.ImageContainer>
                    <styled.Image src={HOW_IMG1} alt="how1" />
                    <styled.TextContainer>
                        <styled.Text>Sign Up and Input a Listing</styled.Text>
                    </styled.TextContainer>
                </styled.ImageContainer>
                <styled.ImageContainer>
                    <styled.Image src={HOW_IMG2} alt="how2" />
                    <styled.TextContainer>
                        <styled.Text>Accept Bookings</styled.Text>
                    </styled.TextContainer>
                </styled.ImageContainer>
                <styled.ImageContainer>
                    <styled.Image src={HOW_IMG3} alt="how3" />
                    <styled.TextContainer>
                        <styled.Text>Grow and Manage Your Business The New Way</styled.Text>
                    </styled.TextContainer>
                </styled.ImageContainer>
            </styled.Wrapper>
            <styled.ListButton onClick={goSignup}>
                SIGN UP
            </styled.ListButton>
        </styled.Container>
    )

}