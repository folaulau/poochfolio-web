import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { MOBILE, TABLET } from '../../../../assets/screen';
import { MINI_TABLET, SMALL_DESKTOP, SMALL_TABLET } from '../../../../assets/screen/screen';

export const Container = styled.div`
	display        : flex;
    height         : 22px;
    background     : ${COLOR.primary0};
    padding        : 7px 168px;
    justify-content: space-between;
    margin-top     : 70px;

    @media(min-width: ${TABLET}) {
        padding        : 7px 18%;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        padding        : 7px 98px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        padding        : 7px 68px;
    }

    @media(max-width: ${MINI_TABLET}) {
        padding        : 7px 30px;
    }

    @media(max-width: ${MOBILE}) {
        flex-direction : column;
        align-itesm    : center;
        justify-content: center;
        height         : 150px;
    }
`;

export const LeftWrapper = styled.div`
    display    : flex;
    align-items: center;

    & > a:last-child {
        margin-left: 30px;
    }

    @media(max-width: ${MINI_TABLET}) {
        & > a:last-child {
            margin-left: 10px;
        }
    }

    @media(max-width: ${MOBILE}) {
        flex-direction : column;
        align-itesm    : center;
        justify-content: center;

        & > label:last-child {
            margin-top: 10px;
        }
    }
`;

export const RightWrapper = styled.div`
    display    : flex;
    align-items: center;

    @media(max-width: ${MOBILE}) {
        align-itesm    : center;
        justify-content: center;
        margin-top: 10px;
        flex-direction : column;
    }
`;

export const Text = styled.a`
    font-size   : 10px;
    font-family : 'MuseoSansRouned500';
    color       : white;
    text-decoration: none;
    cursor      : pointer;
`;

export const SocialWrapper = styled.div`
    display      : flex;
    margin-right : 30px;

    @media(max-width: ${MINI_TABLET}) {
        margin-right : 10px;
    }

    @media(max-width: ${MOBILE}) {
        margin-bottom : 10px;
    }
`;

export const SocialButton = styled.div`
    margin-left : 26px;
    cursor      : pointer;

    @media(max-width: ${MINI_TABLET}) {
        margin-left : 10px;
    }
`;

export const SocialIcon = styled.img`
    width      : 20px;
    height     : 20px;
    object-fit : contain;
`;