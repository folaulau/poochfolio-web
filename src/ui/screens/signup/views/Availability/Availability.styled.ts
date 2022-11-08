import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { MINI_TABLET, MOBILE, SMALL_TABLET } from '../../../../../assets/screen';
import Dropdown from 'react-dropdown';

export const Container = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    max-width      : 940px;

    @media(max-width: ${SMALL_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MINI_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MOBILE}) {
        width          : 90%;
    }
`;

export const Form = styled.form`
    display        : flex;
    flex-direction : column;
    width          : 100%;
    margin-top     : 30px;
    border-radius  : 14px;
`;

export const Title = styled.label`
    color      : ${COLOR.primary0};
    font-size  : 26px;
    font-family: 'MuseoSansRouned700';
    text-align : center;
    margin-bottom: 10px;
`;

export const Description = styled.label`
    color      : ${COLOR.gray2};
    font-size  : 15px;
    font-family: 'MuseoSansRouned700';
    text-align : center;
`;

export const Wrapper = styled.div`
    margin-top: 70px;
`;

export const Lable = styled.label`
    color      : ${COLOR.gray2};
    font-size  : 18px;
    font-family: 'MuseoSansRouned900';
    text-align : center;
`;

export const DropList = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: space-between;
    margin-top    : 10px;

    & > label {
        margin     : 0 20px;
        color      : ${COLOR.gray2};
        font-size  : 15px;
        font-family: 'MuseoSansRouned700';
    }

    @media(max-width: ${MINI_TABLET}) {
        & > label {
            margin: 0px 10px;
        }
    }

    @media(max-width: ${MOBILE}) {
        & > label {
            margin: 0px 4px;
        }
    }
`;


export const List = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: space-between;
    margin-top    : 10px;

    & > label {
        margin: 0 20px;
        color      : ${COLOR.gray2};
        font-size  : 15px;
        font-family: 'MuseoSansRouned700';
    }

    @media(max-width: ${SMALL_TABLET}) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;


export const Drop = styled(Dropdown)`
    height        : 60px;
    width         : 100%;
    background    : white;
    border        : 1px solid ${COLOR.primary6};
    border-radius : 14px;
    color         : ${COLOR.gray2};
    font-family   : 'MuseoSansRouned700';
    font-size     : 15px;
    box-shadow    : 0px 10px 15px #DFECFF;
    z-index       : 3;
`;

export const Day = styled.div<{
    active: boolean
}>`
    display       : flex;
    height        : 105px;
    width         : 116px;
    flex-direction: column;
    align-items   : center;
    justify-content: center;
    cursor        : pointer;
    border-radius : 14px;
    margin        : 4px;
    ${({active}) => active ? `background: ${COLOR.primary1};` : ` box-shadow    : inset 2.99px 0.26px 18px 10px #85D8E759;`}

    & > div {
        width: 38px;
        height: 38px;
        border-radius: 19px;
        display       : flex;
        align-items   : center;
        justify-content: center;
        border        : 1px solid #C4DFEA;
        background : ${({ active }) => active ? 'white' : 'transparent'};

        & > svg {
            display:  ${({ active }) => active ? 'flex' : 'none'};
        }
    }

    & > label {
        font-size  : 15px;
        font-family: 'MuseoSansRouned300';
        margin-top : 10px;
        cursor     : pointer;
        color      : ${({ active }) => active ? COLOR.primary0 : COLOR.gray2};
    }
`;

export const LoginButton = styled.div`
    height    : 46px;
    width     : 100%;
    border-radius: 23px;
    cursor     : pointer;
    background : ${COLOR.primary0};
    color      : white;
    font-size  : 15px;
    font-family: 'MuseoSansRouned700';
    display    : flex;
    align-items: center;
    justify-content: center;
    margin-top : 70px;
    max-width  : 550px;
    align-self : center;

    &:hover {
        background : ${COLOR.primary1};
    }
`;