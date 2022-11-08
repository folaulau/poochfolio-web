import React from 'react';
import * as styled from './Footer.styled';
import LOGO from "../../../../../assets/images/Logo.svg"
import GOOGLEPLAY from "../../../../../assets/images/google-play.png"
import APPLESTORE from "../../../../../assets/images/app-store.png"
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

type Props = {};

export const Footer: React.FC<Props> = () => {

    return (
        <styled.Container>
            <styled.MainContainer>
                <styled.LogoContainer>
                    <styled.LogoImage src={LOGO} alt="app-logo" />
                    <styled.Text>319 North Venice Blvd. Venice, CA 90291</styled.Text>
                    <styled.Text>info@poochapp.com</styled.Text>
                    <styled.Name>Pooch Marketplace</styled.Name>
                    <styled.LogoWrapper>
                        <styled.AppLogo src={APPLESTORE} alt="apple-store" />
                        <styled.AppLogo src={GOOGLEPLAY} alt="google-play" />
                    </styled.LogoWrapper>
                </styled.LogoContainer>
                <styled.ListContainer>
                    <styled.Property>LOST ANGELES COUNTRY</styled.Property>
                    <styled.Linear />
                    <ul>
                        <li>Venice, CA</li>
                        <li>Santa Monica, CA</li>
                        <li>Culver City, CA</li>
                        <li>Marina Del Rey, CA</li>
                        <li>Malibu, CA</li>
                        <li>Beverly Hills, CA</li>
                        <li>Calabasas, CA</li>
                        <li>Manhattan Beach, CA</li>
                        <li>Hermosa Beach, CA</li>
                        <li>Irvine, CA</li>
                        <li>Laguna Beach, CA</li>
                        <li>Laguna Niguel, CA</li>
                        <li>Newport Beach, CA</li>
                    </ul>
                </styled.ListContainer>
                <styled.ListContainer>
                    <styled.Property>NATIONWIDE</styled.Property>
                    <styled.Linear />
                    <ul>
                        <li>Los Angeles, CA</li>
                        <li>San Diego, CA</li>
                        <li>San Francisco, CA</li>
                        <li>Miami, FL</li>
                        <li>New York, NY</li>
                        <li>Chicago, IL</li>
                        <li>Houston, TX</li>
                        <li>Phoenix, AZ</li>
                        <li>Philadelphia, MS</li>
                        <li>Dallas, TX</li>
                        <li>Austin, MN</li>
                        <li>Denver, CO</li>
                        <li>Las Vegas, NV</li>
                    </ul>
                </styled.ListContainer>
                <styled.ListContainer>
                    <styled.Property>FEATURES</styled.Property>
                    <styled.Linear />
                    <styled.Column>
                        <styled.Row>
                            <li>Pooch profile and intake form</li>
                            <li>Client management</li>
                            <li>Instant bookings</li>
                            <li>Pick-up drop-off API for kennels and groomers</li>
                            <li>Machine learning SMS integration and automation</li>
                            <li>Cloud storage and data security</li>
                        </styled.Row>
                        <styled.Row>
                            <li>Payroll and Employee management</li>
                            <li>Add multiple users and set user permissions</li>
                            <li>Analytics and QuickBooks integration</li>
                            <li>QuickBooks Connect</li>
                            <li>POS hardware</li>
                            <li>Stripe integration</li>
                            <li>Text to pay</li>
                            <li>Calendar integration</li>
                        </styled.Row>
                    </styled.Column>
                </styled.ListContainer>
            </styled.MainContainer>
            <styled.Footer>
                <styled.PrivacyContainer>
                    <a
                        href="https://www.linkedin.com/company/poochfolio/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Investor Relations
                    </a>
                    |
                    <a
                        href="https://app.termly.io/document/privacy-policy/c20e24ba-36fe-40cc-879e-6c1a3143a5dc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Licensing
                    </a>
                    |
                    <a
                        href="https://app.termly.io/document/privacy-policy/c20e24ba-36fe-40cc-879e-6c1a3143a5dc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy Policy
                    </a>
                </styled.PrivacyContainer>
                <styled.Label>© 2022 POOCH TECHNOLOGIES INC © POOCHFOLIO LLC</styled.Label>
                <styled.SocialContainer>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookF color='white' />
                    </a>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillYoutube color='white' />
                    </a>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillInstagram color='white' />
                    </a>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin color='white' />
                    </a>
                </styled.SocialContainer>
            </styled.Footer>
        </styled.Container>
    )

}