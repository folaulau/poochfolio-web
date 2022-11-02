import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { DESKTOP, MOBILE, SMALL_DESKTOP, TABLET } from '../../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    flex-direction : column;
    align-items    : center;
    justify-content: center;
    height         : 100vh;
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

export const Title = styled.div`
    color      :  ${COLOR.gray4};
    font-family: 'MuseoSansRouned900';
    font-size  : 40px;
    max-width  : 450px;  
    margin-bottom: 10px;

    @media(max-width: ${SMALL_DESKTOP}) {
        max-width  : 100%;  
    }

    @media(max-width: ${MOBILE}) {
        font-size  : 32px;
    }
`;

export const Wrapper = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    margin-top    : 60px;
    justify-content: space-between;
    width         : 100%;

    @media(max-width: ${SMALL_DESKTOP}) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    z-index   : -1;
    width: 320px;
`;

export const ImageContainer = styled.div`
    position: relative;

    @media(max-width: ${SMALL_DESKTOP}) {
        margin: 10px 0px;
    }
`;

export const Text = styled.label`
    font-size : 18px;
    color     : ${COLOR.gray4};
    font-family: 'MuseoSansRouned700';
    text-align: center;
`;

export const TextContainer = styled.div`
    position: absolute;
    bottom: 6.333333%;
    left: 33.333333%;
    width: 200px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ListButton = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    margin-top     : 50px;
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
    text-align     : center;

    &:hover {
        background: ${COLOR.primary1 + 'CA'};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        max-width : 420px;
        align-self: center;
        display   : none;
    }
`;