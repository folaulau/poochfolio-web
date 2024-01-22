import React, { useEffect, useState } from 'react';
import * as styled from './Main.styled';
import BACKGROUND from '../../../../../assets/images/main-background.png';
import MOBILE_BACKGROUND from '../../../../../assets/images/landing/bg-mobile-1.png';
import DOG from '../../../../../assets/images/landing/dog-mobile.png';
import { COLOR } from '../../../../../assets/colors';
import { useNavigate } from 'react-router-dom';

type Props = {};

const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export const Main: React.FC<Props> = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const navigate = useNavigate();

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const goSignup = () => {
        navigate('/signup')
    }

    return (
        <styled.Container>
            <styled.BackgrounImage src={windowSize.innerWidth < 1050 ? MOBILE_BACKGROUND : BACKGROUND} alt="background" />
            <styled.Wrapper backgroundImage={windowSize.innerWidth < 1050 ? MOBILE_BACKGROUND : BACKGROUND}>
                <styled.Title>
                    <span style={{ color: COLOR.primary0 }}>Marketing</span> and
                </styled.Title>
                <styled.Title>
                    <span style={{ color: COLOR.primary0 }}>Management</span> for
                </styled.Title>
                <styled.Title>
                    Groomers and
                </styled.Title>
                <styled.Title>
                    Kennels
                </styled.Title>
                <styled.Signup onClick={goSignup}>
                    SIGN UP
                </styled.Signup>
                <styled.DogIcon src={DOG} alt="dog" />
            </styled.Wrapper>
        </styled.Container>
    )
}