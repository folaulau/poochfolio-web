import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { DESKTOP, MINI_TABLET, MOBILE, SMALL_DESKTOP, SMALL_TABLET, TABLET } from '../../../../../assets/screen';

export const Container = styled.div`
    padding-top: 86px;
`;

export const Wrapper = styled.div<{
    backgroundImage: any
}>`
    display        : flex;
    flex-direction : column;
    justify-content: center;
    height         : calc(100vh - 86px);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding        : 0px 16%;

    @media(max-width: ${DESKTOP}) {
        padding        : 0px 10%;
    }

    @media(max-width: ${TABLET}) {
        padding        : 0px 5%;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        padding        : 0px 30px;
        justify-content: flex-start;
        text-align     : center;
        padding-top    : 80px;
        height         : calc(100vh - 166px);
        align-items    : center;
    }

    @media(max-width: ${MOBILE}) {
        height         : calc(100vh - 166px);
        text-align     : center;
        padding        : 0px 10px;
        padding-top    : 80px;
    }
`;

export const BackgrounImage = styled.img`
    position: absolute;
    width   : 100%;
    object-fit: contain;
    top     : 86px;
    z-index : -1;
`;

export const DogIcon = styled.img`
    display: none;
    width: 450px;
    object-fit: contain;
    margin-top: 50px;

    @media(max-width: ${SMALL_DESKTOP}) {
        display: flex;
    }

    @media(max-width: ${MOBILE}) {
        width: 90%;
    }
`;

export const Title = styled.label`
    font-size: 60px;
    color: ${COLOR.gray4};
    font-family: 'MuseoSansRouned900';

    @media(max-width: ${SMALL_TABLET}) {
        font-size: 56px;
    }

    @media(max-width: ${MINI_TABLET}) {
        font-size: 50px;
    }

    @media(max-width: ${MOBILE}) {
        font-size: 45px;
    }
`;

export const Signup = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    margin-top     : 20px;
    color          : ${COLOR.primary0};
    background     : ${COLOR.primary1};
    width          : 248px;
    height         : 68px;
    border-radius  : 34px;
    font-family    : 'MuseoSansRouned900';
    cursor         : pointer;
    -webkit-box-shadow: 3px 7px 24px -3px rgba(7,120,151,0.48);
    -moz-box-shadow   : 3px 7px 24px -3px rgba(7,120,151,0.48);
    box-shadow        : 3px 7px 24px -3px rgba(7,120,151,0.48);
    margin-bottom  : 40px;

    &:hover {
        background: ${COLOR.primary1 + 'CA'};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        display: none;
    }
`;