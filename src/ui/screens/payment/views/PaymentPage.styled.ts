import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { MINI_TABLET, MOBILE } from '../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    width          : 100%;
    align-items    : center;
    justify-content: center;
    flex-direction : column;

    @media(max-width: ${MINI_TABLET}) {
    }

    @media(max-width: ${MOBILE}) {
        
    }
`;

export const Form = styled.form`
    display        : flex;
    flex-direction : column;
    align-items    : center;
    background     : white;
    border-radius  : 14px;
    padding        : 20px;
    margin         : 0 10px;
    width          : 300px;
    box-shadow: 0px 10px 15px #DFECFF;

    @media(max-width: ${MINI_TABLET}) {
        width          : 70%;
    }

    @media(max-width: ${MOBILE}) {
        width          : 80%;
        padding        : 20px;
    }

`;

export const Button = styled.div`
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

export const Text = styled.label`
    color      : ${COLOR.primary0};
    font-size  : 12px;
    font-family: 'MuseoSansRouned700';
    text-align : center;
    margin-top : 30px;
`;

export const Img = styled.img`
    width     : 140px;
    object-fit: contain;
`;

export const Wrapper = styled.div`
    display    : flex;
    align-items: center;
    width      : 100%;
    justify-content: center;
    margin-top : 150px;
`;

export const Title = styled.label`
    color      : ${COLOR.primary0};
    font-size  : 25px;
    font-family: 'MuseoSansRouned700';
    text-align : center;
    margin-bottom: 30px;
`;

export const TaxWrapper = styled.div`
    display    : flex;
    align-items: center;
    margin-top : 30px;
    box-shadow : 0px 10px 15px #DFECFF;
`;

export const IdWrapper = styled.div`
    color      : ${COLOR.primary0};
    font-size  : 18px;
    font-family: 'MuseoSansRouned300';
    text-align : center;
    display    : flex;
    align-items: center;
    justify-content: center;
    padding    : 24px 30px;
    background : white;
    border-radius: 32px 0 0 32px;
    border     : 1px solid ${COLOR.primary6};
    width      : 120px;
`;

export const ID = styled.div`
    color      : ${COLOR.gray2};
    font-size  : 18px;
    font-family: 'MuseoSansRouned300';
    text-align : center;
    display    : flex;
    align-items: center;
    justify-content: center;
    padding    : 24px 50px;
    background : white;
    border     : 1px solid ${COLOR.primary6};
`;

export const Confirm = styled.div`
    color      : white;
    font-size  : 18px;
    font-family: 'MuseoSansRouned300';
    text-align : center;
    display    : flex;
    align-items: center;
    justify-content: center;
    padding    : 24px 30px;
    background : ${COLOR.primary0};
    border-radius: 0px 32px 32px 0px;
    width      : 120px;
    cursor     : pointer;
`;