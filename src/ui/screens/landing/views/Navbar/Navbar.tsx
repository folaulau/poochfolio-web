import React, { useEffect, useState } from 'react';
import * as styled from './Navbar.styled';
import LOGO from '../../../../../assets/images/Logo.svg';
import HEADSET from '../../../../../assets/images/headset.svg';
import MENUICON from '../../../../../assets/images/menu.svg';
import HEADER_BACK from '../../../../../assets/images/header-background.svg';
import { onShowLiveChat } from '../../../../../support';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

type Props = {
    clickMenu: () => void
};

export const Navbar: React.FC<Props> = ({
    clickMenu
}) => {
    const navigate = useNavigate();
    const authed = useSelector((state : any) => state.auth.authed);
    const [scrollDir, setScrollDir] = useState("up");

    useEffect(() => {
        if(authed) {
            navigate('/reservations')
        }
    }, [authed])

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            if (scrollY > lastScrollY && scrollY - threshold > 111) {
                setScrollDir("down")
            }
            if (scrollY < lastScrollY) {
                setScrollDir("up")
            }
            // setScrollDir(scrollY > lastScrollY && scrollY - threshold > 111 ? "down" : "up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            let timer: any;

            if (timer) {
                clearTimeout(timer);
            }

            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    const onShow = () => {
        onShowLiveChat();
    }

    const goSignin = () => {
        navigate('/signin')
    }

    const goSignup = () => {
        navigate('/signup')
    }

    return (
        <styled.Container show={scrollDir === "down" ? false : true} backgroundImage={HEADER_BACK}>
            <styled.LogoWrapper href='/'>
                <styled.Logo src={LOGO} alt="logo" />
            </styled.LogoWrapper>
            <styled.Link href="#marketplace">MARKETPLACE</styled.Link>
            <styled.Link href="#management">MANAGEMENT</styled.Link>
            <styled.Link href="#how-it-work">HOW IT WORKS</styled.Link>
            <styled.ButtonWrapper>
                <styled.Button onClick={goSignin}>Login</styled.Button>
                <styled.Button onClick={goSignup}>Sign Up</styled.Button>
                <styled.Support onClick={onShow}>
                    <styled.SupportLogo src={HEADSET} alt="support" />
                    Support
                </styled.Support>
                <styled.Menu onClick={clickMenu}>
                    <styled.MenuIcon src={MENUICON} />
                </styled.Menu>
            </styled.ButtonWrapper>
        </styled.Container>
    )
}