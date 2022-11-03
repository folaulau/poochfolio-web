import React, { useEffect } from 'react';
import * as styled from './SignupPage.styled';
import KEY from '../../../../assets/images/key1.svg';
import DOCUMENT from '../../../../assets/images/document.svg';
import DOCUMENT_ACTIVE from '../../../../assets/images/document-active.svg';
import USER from '../../../../assets/images/user.svg';
import USER_ACTIVE from '../../../../assets/images/user-active.svg';
import AVAILABILITY from '../../../../assets/images/availability.svg';
import AVAILABILITY_ACTIVE from '../../../../assets/images/availability-active.svg';
import { Sign } from './Sign/Sign';
import { CreateProfile } from './CreateProfile';
import { InputListing } from './InputListing';
import { Availability } from './Availability';
import { useSelector } from 'react-redux';


type Props = {};

export const SignupPage: React.FC<Props> = () => {
    const currentStep = useSelector((state : any) => state.auth.currentStep);

    useEffect(() => {
        let doc: any = document;
        doc.querySelector('.main_component').scrollTop = 0;
    }, [currentStep]);

    return (
        <styled.Container>
            <styled.Header>
                <styled.Stepper>
                    <styled.Step1>
                        <styled.Icon active={currentStep >= 0}>
                            <img src={KEY} alt="key" />
                        </styled.Icon>
                        <styled.Text>Sign Up</styled.Text>
                    </styled.Step1>
                    <styled.Step2 active={currentStep >= 1}>
                        <styled.Icon active={currentStep >= 1}>
                            <img src={currentStep >= 1 ? USER_ACTIVE : USER} alt="user" />
                        </styled.Icon>
                        <styled.Text>Create Profile</styled.Text>
                    </styled.Step2>
                    <styled.Step3 active={currentStep >= 2}>
                        <styled.Icon active={currentStep >= 2}>
                            <img src={currentStep >= 2 ? DOCUMENT_ACTIVE : DOCUMENT} alt="document" />
                        </styled.Icon>
                        <styled.Text>Input Listing</styled.Text>
                    </styled.Step3>
                    <styled.Step4 active={currentStep >= 3}>
                        <styled.Icon active={currentStep >= 3}>
                            <img src={currentStep >= 3 ? AVAILABILITY_ACTIVE : AVAILABILITY} alt="availability" />
                        </styled.Icon>
                        <styled.Text>Availability</styled.Text>
                    </styled.Step4>
                </styled.Stepper>
            </styled.Header>
            <styled.Body>
                {currentStep === 0 && (<Sign  />)}
                {currentStep === 1 && (<CreateProfile />)}
                {currentStep === 2 && (<InputListing />)}
                {currentStep === 3 && (<Availability />)}
            </styled.Body>
        </styled.Container>
    )
}

