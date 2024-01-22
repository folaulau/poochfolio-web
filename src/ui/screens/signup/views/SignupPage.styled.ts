import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { DESKTOP, MINI_TABLET, MOBILE, SMALL_DESKTOP, SMALL_TABLET, TABLET } from '../../../../assets/screen';
import { motion } from "framer-motion";

export const Container = styled.div`
    display        : flex;
    align-items    : center;
    flex-direction : column;
    width          : 100%;
`;

export const Header = styled.div`
    background: ${COLOR.primary3};
    padding        : 30px 16% 20px 16%;
    width          : 68%;
    border-bottom  : 4px solid white;
    position       : fixed;
    z-index        : 4;

    @media(max-width: ${DESKTOP}) {
        padding        : 30px 10% 20px 10%;
        width          : 80%;
    }

    @media(max-width: ${TABLET}) {
        padding        : 30px 5% 20px 5%;
        width          : 90%;
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        padding        : 20px 30px;
        width          : calc(100% - 60px);
    }

    @media(max-width: ${MOBILE}) {
        padding        : 20px 10px;
        width          : calc(100% - 20px);
    }
`;

export const Stepper = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    border-radius : 32px;
    width         : 100%;
    box-shadow: 3px 6px 28px -14px rgba(106,162,235,1);
`;

export const Step1 = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: center;
    width         : 25%;
    height        : 64px;
    background    : ${COLOR.primary4};
    position      : relative;
    border-radius : 32px 0px 0px 32px;
	border        : 1px solid ${COLOR.primary6};
    z-index       : 8;
    filter        : drop-shadow(6px 6px 10px ${COLOR.primary7});

    & > img {
        padding   : 6px;
        background: ${COLOR.primary1};
        border-radius: 30px;
        margin-right : 10px;
    }

    &:after, &:before {
        left: 100%;
        top: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: transparent;
        border-left-color: ${COLOR.primary4};
        border-width: 32px;
        margin-top: -32px;
    }

    &:before {
        border-color: transparent;
        border-left-color: ${COLOR.primary6};
        border-width: 33px;
        margin-top: -33px;
    }
`;

export const Step2 = styled.div<{
    active: boolean
}>`
    display: flex;
    flex-direction: row;
    align-items : center;
    justify-content: center;
    width: 25%;
    height: 64px;
    background: ${({ active }) => active ?  COLOR.primary4 : 'white'};
    position: relative;
	border: 1px solid ${COLOR.primary6};
    z-index: 7;
    ${({ active }) => active ? `filter: drop-shadow(6px 6px 10px ${COLOR.primary7});` : null};

    & > div {
        @media(max-width: ${MINI_TABLET}) {
            margin-left: 20px;
        }

        @media(max-width: ${MOBILE}) {
            margin-left: 34px;
        }
    }

    & > img {
        padding   : 6px;
        background: ${COLOR.primary1};
        border-radius: 30px;
        margin-right : 10px;
    }

    &:after, &:before {
        left: 100%;
        top: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: transparent;
        border-left-color: ${({ active }) => active ? COLOR.primary4 : 'white'};
        border-width: 32px;
        margin-top: -32px;
    }

    &:before {
        border-color: transparent;
        border-left-color: ${({ active }) => active ? COLOR.primary6 : 'white'};
        border-width: 33px;
        margin-top: -33px;
    }
`;

export const Step3 = styled.div<{
    active: boolean
}>`
    display: flex;
    flex-direction: row;
    align-items : center;
    justify-content: center;
    width: 25%;
    height: 64px;
    background: ${({ active }) => active ?  COLOR.primary4 : 'white'};
    position: relative;
	border: 1px solid ${COLOR.primary6};
    z-index: 6;
    ${({ active }) => active ? `filter: drop-shadow(6px 6px 10px ${COLOR.primary7});` : null};

    & > div {
        @media(max-width: ${MINI_TABLET}) {
            margin-left: 20px;
        }

        @media(max-width: ${MOBILE}) {
            margin-left: 34px;
        }
    }

    & > img {
        width     : 24px;
        height    : 24px;
        object-fit: contain;
    }

    &:after, &:before {
        left: 100%;
        top: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: transparent;
        border-left-color: ${({ active }) => active ? COLOR.primary4 : 'white'};
        border-width: 32px;
        margin-top: -32px;
    }

    &:before {
        border-color: transparent;
        border-left-color: ${({ active }) => active ? COLOR.primary6 : 'white'};
        border-width: 33px;
        margin-top: -33px;
    }
`;

export const Step4 = styled.div<{
    active: boolean
}>`
    display: flex;
    flex-direction: row;
    align-items : center;
    justify-content: center;
    width: 25%;
    height: 64px;
    background: ${({ active }) => active ?  COLOR.primary4 : 'white'};
    position: relative;
    border-radius: 0 32px 32px 0;
	border: 1px solid ${COLOR.primary6};
    z-index: 5;

    & > div {
        @media(max-width: ${MINI_TABLET}) {
            margin-left: 20px;
        }

        @media(max-width: ${MOBILE}) {
            margin-left: 34px;
        }
    }

    & > img {
        padding   : 6px;
        background: ${COLOR.primary1};
        border-radius: 30px;
        margin-right : 10px;
    }
`;

export const Icon = styled.div<{
    active: boolean
}>`
    width         : 42px;
    height        : 42px;
    border-radius :  21px;
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: center;
    background    : ${({active}) => active ? COLOR.primary1 : 'white'};
    margin-right  : 10px;

    @media(max-width: ${SMALL_TABLET}) {
        margin-right  : 0px;
    }
`;

export const Text = styled.div`
    font-size   : 15px;
    font-family : 'MuseoSansRouned500';
    color       : ${COLOR.gray4};

    @media(max-width: ${SMALL_TABLET}) {
        display: none;
    }
`;

export const Body = styled.div`
    width          : 100%;
    display        : flex;
    justify-content: center;
    padding-top    : 160px;

    @media(max-width: ${MINI_TABLET}) {
        padding-top: 120px;
    }
`;

export const Motion = styled(motion.div)`
    display: flex;
    width  : 100%;
    justify-content: center;
`;