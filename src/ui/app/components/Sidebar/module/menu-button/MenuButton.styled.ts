import styled from 'styled-components';
import { COLOR } from '../../../../../../assets/colors';
import { TABLET } from '../../../../../../assets/screen';

export const Container = styled.a<{
    active: boolean
}>`
    display       : flex;
    align-items   : center;
    justify-content: space-between;
    width         : 199px;
    height        : 44px;
    cursor        : pointer;
    margin        : 8px 0;
    padding       : 5px;
    border-radius : 27px;
    background    : ${({active}) => active ? 'white' : COLOR.primary0};
    text-decoration : none;

    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }

    @media(max-width: ${TABLET}) {
        width         : 44px;
        padding       : 0px;
        border-radius : 22px;
        justify-content: center;
    }
`;

export const IconWrapper = styled.div<{
    active: boolean
}>`
    height          : 42px;
    width           : 42px;
    border-radius   : 21px;
    display         : flex;
    align-items     : center;
    justify-content : center;
    margin-right    : 10px;
    background      : ${({active}) => active ? COLOR.primary1 : COLOR.primary0};

    @media(max-width: ${TABLET}) {
        margin-right    : 0px;
    }
`;

export const Icon = styled.img`
    height     : 24px;
    width      : 24px;
    object-fit : contain;
`;

export const Title = styled.label<{
    active: boolean
}>`
    cursor      : pointer;
    color       : ${({active}) => active ? COLOR.primary0 : COLOR.primary2};
    font-size   : 15px;
    font-family : 'MuseoSansRouned300';

    @media(max-width: ${TABLET}) {
        display  : none;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items   : center;
`;



export const Plus = styled.div`
    height          : 42px;
    width           : 42px;
    display         : flex;
    align-items     : center;
    justify-content : center;


    @media(max-width: ${TABLET}) {
        display  : none;
    }
`;
