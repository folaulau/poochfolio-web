import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { MINI_TABLET, MOBILE, SMALL_TABLET } from '../../../../../assets/screen';
import Autocomplete from "react-google-autocomplete";

export const Container = styled.div`
    display        : flex;
    width          : 100%;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    max-width      : 640px;

    @media(max-width: ${SMALL_TABLET}) {
        width          : 90%;
        max-width      : 100%;
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

    @media(max-width: ${MINI_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MOBILE}) {
        width          : 90%;
    }

`;

export const Row = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: space-between;

    @media(max-width: ${MINI_TABLET}) {
        flex-direction: column;
    }
`;

export const InputWrapper = styled.div`
    display        : flex;
    flex-direction : column;
    margin         : 14px 0px;
    width          : 48%;

    @media(max-width: ${MINI_TABLET}) {
        width          : 100%;
    }
`;

export const Label = styled.label`
    font-size  : 12px;
    font-family: 'MuseoSansRouned500';
    color      : ${COLOR.gray2};
`;

export const Input = styled.input`
    margin-top: 10px;
    height    : 46px;
    width     : calc(100% - 40px);
    padding   : 0px 20px;
    border-radius: 23px;
    outline   : none;
    color     : ${COLOR.gray4};
    font-size  : 15px;
    font-family: 'MuseoSansRouned500';
    background : transparent;
    border    : 2px solid ${COLOR.primary1};

    &:focus {
        border    : 2px solid ${COLOR.primary0};
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
    margin-top : 60px;
    max-width  : 500px;
    align-self : center;

    &:hover {
        background : ${COLOR.primary1};
    }
`;

export const AddressWrapper = styled.div`
    display        : flex;
    flex-direction : column;
    margin         : 14px 0px;
    position       : relative;
`;

export const AddressInput = styled(Autocomplete)`
    margin-top: 10px;
    height    : 46px;
    width     : calc(100% - 40px);
    padding   : 0px 20px;
    border-radius: 23px;
    outline   : none;
    color     : ${COLOR.gray4};
    font-size  : 15px;
    font-family: 'MuseoSansRouned500';
    background : transparent;
    border    : 2px solid ${COLOR.primary1};

    &:focus {
        border    : 2px solid ${COLOR.primary0};
    }
`;

export const Location = styled.div`
    position: absolute;
    right: 20px;
    bottom: 10px;
`;

export const ServiceContainer = styled.div`
    display       : flex;
    flex-direction: column;
    align-items   : center;
    margin-top    : 50px;
`;

export const List = styled.div`
    display       : flex;
    flex-direction: row;
    width         : 100%;
    align-items   : center;
    justify-content: space-between;
    margin-top    : 20px;

    @media(max-width: ${MINI_TABLET}) {
        flex-direction: column;
    }

`;

export const Service = styled.div<{
    active: boolean
}>`
    display       : flex;
    height        : 66px;
    width         : 158px;
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: center;
    cursor        : pointer;
    border-radius : 14px;
    ${({active}) => active ? `background: ${COLOR.primary1};` : ` box-shadow    : inset 2.99px 0.26px 18px 10px #85D8E759;`}
   
    @media(max-width: ${MINI_TABLET}) {
        width : 60%;
        margin-top: 10px;
    }

    @media(max-width: ${MOBILE}) {
        width : 80%;
        margin-top: 10px;
    }
    
    & > label {
        font-size  : 15px;
        font-family: 'MuseoSansRouned500';
        margin-left: 10px;
        cursor        : pointer;
    }

    & > svg {
        width : 32px;
        height: 32px;
    }
`;