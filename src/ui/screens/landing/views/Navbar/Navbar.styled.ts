import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { DESKTOP, MOBILE, SMALL_DESKTOP, SMALL_TABLET, TABLET } from '../../../../../assets/screen';

export const Container = styled.div<{
    show: boolean,
    backgroundImage: any
}>`
    display        : flex;
    align-items    : center;
    justify-content: space-between;
    // background     : ${COLOR.primary0};
    background-image : url(${({ backgroundImage }) => backgroundImage});
    background-resize: cover;
    padding        : 20px 16%;
    position       : fixed;
    width          : 68%;
    z-index        : 10;
    transition     : transform 0.4s;
    transform      : ${({show}) => show ? 'none' : 'translate3d(0, -100%, 0)' };

    @media(max-width: ${DESKTOP}) {
        padding        : 20px 10%;
        width          : 80%;
    }

    @media(max-width: ${TABLET}) {
        padding        : 20px 5%;
        width          : 90%;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        padding        : 20px 30px;
        width          : calc(100% - 60px);
    }

    @media(max-width: ${MOBILE}) {
        padding        : 20px 10px;
        width          : calc(100% - 20px);
    }
`;

export const LogoWrapper = styled.a`
`;

export const Logo = styled.img`
    width     : 142px;
    object-fit: contain;
    cursor    : pointer;
`;

export const Link = styled.a`
    color      : white;
    font-family: 'MuseoSansRouned500';
    font-size  : 15px;
    cursor     : pointer;
    margin     : 0px 10px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin     : 0px 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        display: none;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;

`;

export const Button = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    background     : ${COLOR.primary4};
    border-radius  : 26px;
    color          : ${COLOR.primary0};
    font-family    : 'MuseoSansRouned500';
    font-size      : 15px;
    cursor         : pointer;
    margin         : 0px 10px;
    padding        : 14px 28px;

    &:hover {
        background: ${COLOR.primary1};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin     : 0px 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        display: none;
    }
`;

export const Support = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    justify-content: center;
    background     : transparent;
    border-radius  : 26px;
    border         : 2px solid white;
    color          : white;
    font-family    : 'MuseoSansRouned500';
    font-size      : 15px;
    cursor         : pointer;
    margin-left    : 10px;
    padding        : 12px 24px;

    &:hover {
        background: ${COLOR.primary1};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin-left: 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        margin-right: 20px;
    }
`;

export const SupportLogo = styled.img`
    height      : 20px;
    width       : 24px;
    object-fit  : contain;
    margin-right: 10px;
`;

export const Menu = styled.div`
    display        : none;
    align-items    : center;
    justify-content: center;
    cursor         : pointer;

    @media(max-width: ${SMALL_TABLET}) {
        display        : flex;
    }
`;

export const MenuIcon = styled.img`
    height    : 38px;
    width     : 38px;
    object-fit: contain;
`;