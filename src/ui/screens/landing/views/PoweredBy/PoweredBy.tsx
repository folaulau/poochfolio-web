import React, { useEffect, useState } from 'react';
import * as styled from './PoweredBy.styled';
import aws from "../../../../../assets/images/brands/aws.svg"
import cometchat from "../../../../../assets/images/brands/cometchat.svg"
import docuSign from "../../../../../assets/images/brands/docu-sign.svg"
import elastic from "../../../../../assets/images/brands/elastic.svg"
import googleCloud from "../../../../../assets/images/brands/google-cloud.svg"
import intuit from "../../../../../assets/images/brands/intuit.svg"
import muleSoft from "../../../../../assets/images/brands/mule-soft.svg"
import paypal from "../../../../../assets/images/brands/paypal.svg"
import stripe from "../../../../../assets/images/brands/stripe.svg"
import twilio from "../../../../../assets/images/brands/twilio.svg"

type Props = {};

const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export const PoweredBy: React.FC<Props> = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    const topRow = windowSize.innerWidth < 1050 ? [twilio, aws, intuit, googleCloud, elastic] : [twilio, stripe, aws, docuSign, intuit, paypal]
    const bottomRow = windowSize.innerWidth < 1050 ? [stripe, docuSign, paypal, muleSoft, cometchat] : [googleCloud, muleSoft, elastic, cometchat]

    return (
        <styled.Container>
            <styled.Divider>
                <styled.Line></styled.Line>
                <styled.Text>POWERED BY</styled.Text>
                <styled.Line></styled.Line>
            </styled.Divider>
            <styled.LogoContainer>
                <styled.LogoWrapper>
                    {topRow.map((logo, i) => (
                        <styled.Logo src={logo} alt={"t-logo" + i} key={i} />
                    ))}
                </styled.LogoWrapper>
                <styled.LogoWrapper>
                    {bottomRow.map((logo, i) => (
                        <styled.Logo src={logo} alt={"b-logo" + i} key={i} />
                    ))}
                </styled.LogoWrapper>
            </styled.LogoContainer>
        </styled.Container>
    )

}