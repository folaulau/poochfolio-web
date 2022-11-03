import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { MOBILE, SMALL_TABLET } from '../../../../../assets/screen';

export const Container = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: space-between;
    background     : white;
    border-radius  : 14px;
    border         : 1px solid ${COLOR.primary6};
    box-shadow     : 0px 0px 5px 2px rgb(0 0 0 / 7%);
    margin         : 6px 0;

    &:hover {
        background : ${COLOR.primary3};
    }

    @media(max-width: ${SMALL_TABLET}) {
        flex-direction: column;
        width         : 320px;
        max-width     : 320px;
        min-width     : 320px;
    }

    @media(max-width: ${MOBILE}) {
        width         : 240px;
        max-width     : 240px;
        min-width     : 240px;
    }
`;

export const InfoContainer = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    padding       : 10px 16px;
    width         : 30%;

    @media(max-width: ${SMALL_TABLET}) {
        padding       : 10px 16px;
        width         : calc(100% - 32px);
    }
`;

export const Avatar = styled.img`
    height        : 58px;
    width         : 58px;
    border-radius : 29px;
    margin-right  : 10px;
`;

export const Text = styled.label`
    font-family : 'MuseoSansRouned700';
    font-size   : 15px;
    color       : ${COLOR.gray4};
`;

export const CheckContainer = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    justify-content: space-between;
    width          : 40%;
    padding-right  : 30px;

    @media(max-width: ${SMALL_TABLET}) {
        padding       : 0px 16px;
        width         : calc(100% - 32px);
    }
`;

export const Divider = styled.div`
    height    : 50px;
    width     : 1px;
    background: ${COLOR.gray1};
    
    @media(max-width: ${SMALL_TABLET}) {
        display : none;
    }
`;

export const Services = styled.div`
    display        : flex;
    flex-direction : column;
    margin-left    : 16px;

    @media(max-width: ${SMALL_TABLET}) {
        margin-left    : 0px;
    }
`;

export const SText = styled.label`
    font-family : 'MuseoSansRouned300';
    font-size   : 13px;
    color       : black;
    margin-top  : 4px;
`;

export const CheckTool = styled.div`
    display        : flex;
    flex-direction : column;
`;

export const CheckButton = styled.div`
    height         : 30px;
    width          : 140px;
    display        : flex;
    align-items    : center;
    justify-content: center;
    cursor         : pointer;
    border-radius  : 15px;
    border         : 1px solid ${COLOR.primary0};
    margin         : 4px 0;
    color          : ${COLOR.primary0};
    font-size      : 15px;
    font-family    : 'MuseoSansRouned700';

    &:hover {
        background     : ${COLOR.primary0};
        color          : white;
    }
`;

export const PaymentContainer = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    justify-content: space-between;
    padding-right  : 10px;
    background     : #EBFDFF 0% 0% no-repeat padding-box;
    // box-shadow     : 0px 10px 15px #DFECFF;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    padding        : 10px;
    width          : 30%;
    padding-left   : 30px;

    @media(max-width: ${SMALL_TABLET}) {
        padding       : 10px 16px;
        width         : calc(100% - 32px);
    }
`;

export const PaymentLinkButton = styled.div`
    height         : 30px;
    width          : 178px;
    display        : flex;
    align-items    : center;
    justify-content: center;
    cursor         : pointer;
    border-radius  : 15px;
    background     : ${COLOR.primary0};
    box-shadow     : 0px 10px 20px #00A3CE33;
    margin         : 4px 0;
    color          : white;
    font-size      : 15px;
    font-family    : 'MuseoSansRouned700';
    border         : 1px solid ${COLOR.primary0};

    &:hover {
        background     : #0ea3ca;
    }
`;

export const CollectButton = styled.div`
    height         : 30px;
    width          : 178px;
    display        : flex;
    align-items    : center;
    justify-content: center;
    cursor         : pointer;
    border-radius  : 15px;
    border         : 1px solid ${COLOR.primary0};
    margin         : 4px 0;
    color          : ${COLOR.primary0};
    font-size      : 15px;
    font-family    : 'MuseoSansRouned300';
    box-shadow     : 0px 10px 20px #00A3CE33;

    &:hover {
        background     : ${COLOR.primary0};
        color          : white;
    }
`;

export const Edit = styled.div`
    cursor         : pointer;
    align-items    : flex-start;
    display        : flex;
    justify-content: flex-end;
`;

export const Amount = styled.div`
    display       : flex;
    flex-direction: column;
    text-align    : center;
    margin-top    : 20px;

    & > span:first-child {
        font-family: 'MuseoSansRouned300';
        font-size  : 10px;
        color      : ${COLOR.primary0};
    }

    & > span:last-child {
        font-family: 'MuseoSansRouned700';
        font-size  : 16px;
        color      : ${COLOR.primary0};
    }
`;