import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { DESKTOP, MOBILE, SMALL_DESKTOP, TABLET } from '../../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    flex-direction : column;
    align-items    : center;
    height         : 50vh;
    padding        : 0px 16%;

    @media(max-width: ${DESKTOP}) {
        padding        : 0px 10%;
    }

    @media(max-width: ${TABLET}) {
        padding        : 0px 5%;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        padding        : 0px 30px;
        flex-direction : column;
        height         : auto;
        margin-top     : 100px;
    }

    @media(max-width: ${MOBILE}) {
        padding        : 0px 10px;
    }
`;

export const Divider = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: space-between;
    width         : 100%;
    margin-bottom : 50px;

    @media(max-width: ${SMALL_DESKTOP}) {
        margin-bottom : 20px;
    }
`;

export const Line = styled.div`
    width: 50%;
    height: 1px;
    background: ${COLOR.gray1};
`;

export const Text = styled.label`
    font-size : 12px;
    color     : ${COLOR.gray2};
    font-family: 'MuseoSansRouned500';
    margin    : 0 10px;
    width     : 100px;
    text-align: center;
`;

export const LogoContainer = styled.div`
    width         : 100%;
    display       : flex;
    flex-direction: column;

    @media(max-width: ${SMALL_DESKTOP}) {
        flex-direction: row;
    }
`;

export const LogoWrapper = styled.div`
    width         : 100%;
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: space-around;
    margin        : 30px 0px;

    @media(max-width: ${SMALL_DESKTOP}) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    @media(max-width: ${SMALL_DESKTOP}) {
        margin        : 30px 0px;
    }
`;