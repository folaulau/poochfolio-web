import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { MINI_TABLET, MOBILE } from '../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    width          : 100%;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    padding-bottom : 52px;

    @media(max-width: ${MINI_TABLET}) {
    }

    @media(max-width: ${MOBILE}) {
        
    }
`;

export const Title = styled.label`
    font-size  : 38px;
    font-family: 'MuseoSansRouned900';
    color      : ${COLOR.gray4};
    margin-top : 70px;
`;

export const Form = styled.form`
    display        : flex;
    flex-direction : column;
    width          : 400px;
    background     : white;
    margin-top     : 30px;
    border-radius  : 14px;
    padding        : 40px;

    @media(max-width: ${MINI_TABLET}) {
        width          : 70%;
    }

    @media(max-width: ${MOBILE}) {
        width          : 80%;
        padding        : 20px;
    }

`;

export const InputWrapper = styled.div`
    display        : flex;
    flex-direction : column;
    margin         : 14px 0px;
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
    border    : 2px solid ${COLOR.primary1};

    &:focus {
        border    : 2px solid ${COLOR.primary0};
    }
`;

export const ForgotPassword = styled.div`
    font-size  : 12px;
    font-family: 'MuseoSansRouned500';
    color      : black;
    cursor     : pointer;
    align-self : flex-end;
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
    margin-top : 40px;

    &:hover {
        background : ${COLOR.primary1};
    }
`;

export const Divider = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: space-between;
    width         : 100%;
    margin        : 40px 0px;
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

export const SocialContainer = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: space-around;
`;

export const SocialButton = styled.div`
    display       : flex;
    align-items   : center;
    justify-content: center;
    width         : 150px;
    height        : 46px;
    border-radius : 14px;
    border        : 1px solid ${COLOR.gray1};
    cursor        : pointer;

    & > img {
        width     : 24px;
        object-fit: contain;
    }

    &:hover {
        border        : 1px solid ${COLOR.primary0};
    }
`;