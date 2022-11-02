import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { HowItWork } from './HowItWork';
import * as styled from './LandingPage.styled';
import { Main } from './Main';
import { Management } from './Management';
import { Marketplace } from './Marketplace';
import { Navbar } from './Navbar';
import { PoweredBy } from './PoweredBy';
import { slide as Menu } from 'react-burger-menu'
import { onSupport } from '../../../../support';

type Props = {};

export const LandingPage: React.FC<Props> = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        onSupport();
      }, [])

      
    const onClickMenu = () => {
        setShowMenu((prev) => !prev)
    }

    return (
        <styled.Container>
            <div id="outer-container">
                <Menu id="push" pageWrapId={'page-wrap'} width={230} outerContainerId={'outer-container'} right onClose={() => { setShowMenu(false) }} isOpen={showMenu}>
                    <a onClick={() => { setShowMenu(false) }} className="menu-item" href="#marketplace">Marketplace</a>
                    <a onClick={() => { setShowMenu(false) }} className="menu-item" href="#management">Management</a>
                    <a onClick={() => { setShowMenu(false) }} className="menu-item" href="#how-it-work">How it works</a>
                    <a onClick={() => { setShowMenu(false) }} className="menu-item" rel="noopener noreferrer" href="https://www.linkedin.com/company/poochfolio/"
                        target="_blank">Investor relations</a>
                    <a id="contact" className="menu-item" href="/">Contact</a>
                </Menu>
            </div>
            <Navbar clickMenu={onClickMenu} />
            <Main />
            <Marketplace />
            <Management />
            <HowItWork />
            <PoweredBy />
            <Footer />
        </styled.Container>
    )
}