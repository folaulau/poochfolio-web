import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { DESKTOP, MOBILE, SMALL_DESKTOP, TABLET } from '../../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    flex-direction : column;
    align-items    : center;
    padding        : 0px 16%;
    padding-top    : 100px;
    padding-bottom : 30px;
    background     : ${COLOR.primary0};
    border-top-left-radius : 30px;
    border-top-right-radius: 30px;

    @media(max-width: ${DESKTOP}) {
        padding        : 0px 10%;
        padding-top    : 100px;
        padding-bottom : 30px;
    }

    @media(max-width: ${TABLET}) {
        padding        : 0px 5%;
        padding-top    : 100px;
        padding-bottom : 30px;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        padding        : 0px 30px;
        flex-direction : column;
        height         : auto;
        margin-top     : 50px;
        padding-top    : 100px;
        padding-bottom : 30px;
    }

    @media(max-width: ${MOBILE}) {
        padding        : 0px 10px;
        padding-top    : 100px;
        padding-bottom : 30px;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width          : 100%;

    @media(max-width: ${SMALL_DESKTOP}) {
        display       : flex;
        flex-direction: column;
    }

    @media(max-width: ${MOBILE}) {
        width          : 90%;
    }
`;

export const LogoContainer = styled.div`
    display       : flex;
    flex-direction: column;


    @media(max-width: ${SMALL_DESKTOP}) {
        align-items : center;
    }
`;

export const ListContainer = styled.div`
    & > ul {
        padding-left: 12px;
    }

    & > ul > li {
        font-family: 'MuseoSansRouned300';
        font-size  : 12px;
        color      : ${COLOR.primary5};
        width      : 190px;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        display       : flex;
        flex-direction: column;
        margin-top    : 50px;

        & > ul > li {
            font-size  : 16px;
        }
    }
`;

export const Property = styled.label`
    font-family: 'MuseoSansRouned700';
    font-size  : 15px;
    color      : white;
`;

export const Linear = styled.div`
    width     : 60px;
    height    : 3px;
    background: #C0EBF6;
    margin-top: 10px;
    margin-bottom : 20px;
`;

export const LogoWrapper = styled.div`
    display       : flex;
    flex-direction: column;

    @media(max-width: ${SMALL_DESKTOP}) {
        flex-direction: row;
    }
`;

export const LogoImage = styled.img`
    width     : 142px;
    object-fit: contain;
    margin-bottom: 40px;
`;

export const Text = styled.label`
    width     : 200px;
    color     : ${COLOR.primary5};
    font-family: 'MuseoSansRouned300';
    font-size : 15px;

    @media(max-width: ${SMALL_DESKTOP}) {
        text-align : center;
    }
`;

export const Name = styled.label`
    color        : ${COLOR.primary5};
    font-family  : 'MuseoSansRouned900';
    font-size    : 15px;
    margin-top   : 30px;
    margin-bottom: 20px;
`;

export const AppLogo = styled.img`
    width     : 132px;
    object-fit: contain;
    margin    : 4px 0px;
    cursor    : pointer;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: row;

    & > ul:last-child {
        margin-left: 30px;
    }

    @media(max-width: ${TABLET}) {
        flex-direction: column;

        & > ul:last-child {
            margin-left: 0px;
        }
    }
`;

export const Row = styled.ul`
    padding-left: 12px;
    margin : 0px;

    & > li {
        font-family: 'MuseoSansRouned300';
        font-size  : 12px;
        color      : ${COLOR.primary5};
        width      : 190px;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        & > li {
            font-size  : 16px;
        }
    }
`;

export const Footer = styled.div`
    margin-top : 100px;
    display    : flex;
    flex-direction : row;
    justify-content: space-between;
    align-items    : center;
    width       : 100%;

    @media(max-width: ${SMALL_DESKTOP}) {
        flex-direction : column-reverse;
    }

    @media(max-width: ${MOBILE}) {
        width   : 90%;
    }
`;

export const PrivacyContainer = styled.div`

    font-family: 'MuseoSansRouned300';
    font-size  : 12px;
    color      : ${COLOR.primary5};

    & > a {
        text-decoration: none;
        margin: 0px 10px;
        font-family: 'MuseoSansRouned300';
        font-size  : 12px;
        color      : ${COLOR.primary5};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        font-size  : 14px;
        margin-top : 20px;

        & > a {
            font-size  : 14px;
        }
    }

    @media(max-width: ${MOBILE}) {
        & > a {
            font-size  : 14px;
            text-align: center;
        }
    }
`;

export const Label = styled.label`
    font-family: 'MuseoSansRouned300';
    font-size  : 12px;
    color      : ${COLOR.primary5};
    margin     : 0px 10px;

    @media(max-width: ${SMALL_DESKTOP}) {
        font-size  : 16px;
        margin-top : 20px;
    }

    @media(max-width: ${MOBILE}) {
        text-align: center;
    }
`;

export const SocialContainer = styled.div`
    & > a {
        margin: 0px 14px;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        & > a > svg {
            width : 36px;
            height: 36px;
        }
    }

    
`;