import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { DESKTOP, MOBILE, SMALL_DESKTOP, SMALL_TABLET, TABLET } from '../../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    justify-content: space-between;
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
    }

    @media(max-width: ${MOBILE}) {
        padding        : 0px 10px;
    }
`;

export const ImageContainer = styled.div`
    width      : 50%;

    @media(max-width: ${SMALL_DESKTOP}) {
        margin-top : 60px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        width      : 80%;
    }

    @media(max-width: ${MOBILE}) {
        width      : 100%;
    }
`;

export const Image = styled.img`
    width     : 100%;
    object-fit: contain;
`;

export const DescriptionContainer = styled.div`
    width     : 50%;

    @media(max-width: ${SMALL_DESKTOP}) {
        display       : flex;
        flex-direction: column;
        margin-top    : 100px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        width      : 80%;
    }

    @media(max-width: ${MOBILE}) {
        width      : 90%;
    }
`;

export const Description = styled.div`
    color      :  ${COLOR.gray4};
    font-family: 'MuseoSansRouned900';
    font-size  : 16px;
    margin-bottom: 10px;
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

export const List = styled.div`
    color      : ${COLOR.gray2};
    font-family: 'MuseoSansRouned500';
    font-size  : 15px;
    align-items: center;
    display    : flex;
    margin     : 20px 0px;
`;

export const ListButton = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    margin-top     : 40px;
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

export const ListWrapper = styled.div`
    display       : flex;
    flex-direction: row;

    @media(max-width: ${SMALL_DESKTOP}) {
        flex-direction: column;
    }
`;

export const ListRow = styled.div`

`;

export const IconContainer = styled.div`
    width       : 24px;
    height      : 24px;
    margin-right: 10px;
`;