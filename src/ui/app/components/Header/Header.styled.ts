import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { MOBILE, TABLET } from '../../../../assets/screen';
import { MINI_TABLET, SMALL_DESKTOP, SMALL_TABLET } from '../../../../assets/screen/screen';

export const Container = styled.div`
	display        : flex;
	flex-direction : row;
    align-items    : center;
    justify-content: space-between;
    width          : calc(100% - 90px);
    padding        : 20px 45px;
    background     : ${COLOR.primary3};
    border-top-left-radius   : 20px;

    @media(max-width: ${TABLET}) {
    }

    @media(max-width: ${MINI_TABLET}) {
        width          : calc(100% - 40px);
        padding        : 20px 20px;
    }

    @media(max-width: ${MOBILE}) {
    }
`;

export const PoochContainer = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    width          : 30%;

    @media(max-width: ${SMALL_DESKTOP}) {
        width          : auto;
    }
`;

export const PoochAvatar = styled.img`
    width        : 56px;
    height       : 56px;
    border-radius: 28px;
    object-fit   : cover;
`;

export const PoochName = styled.label`
    font-family: 'MuseoSansRouned700';
    font-size  : 26px;
    color      : ${COLOR.primary0};
    margin-left: 10px;

    @media(max-width: ${SMALL_DESKTOP}) {
        font-size  : 20px;
    }
`;

export const ChatContainer = styled.div`
    display        : flex;
    flex-direction : row;
    justify-content: center;
    position       : relative;
    width          : 40%;

    @media(max-width: ${SMALL_DESKTOP}) {
        width          : 50%;
    }

    @media(max-width: ${SMALL_TABLET}) {
        display    : none;
    }
`;

export const Input = styled.input`
    height         : 42px;
    width          : 100%;
    border         : 2px solid #85D8E7B3;
    outline        : none;
    padding        : 0 20px;
    border-radius  : 21px;
    font-family    : 'MuseoSansRouned300';
    font-size      : 15px;
    color          : ${COLOR.gray4};
    box-shadow     : 1px 1px 40px 6px rgba(0,0,0,0.1);
`;

export const ChatIcon = styled.div`
    display        : flex;
    justify-content: center;
    align-items    : center;
    width        : 44px;
    height       : 44px;
    border-radius: 22px;
    background   : ${COLOR.primary0};
    position     : absolute;
    right        : 0;
`;

export const UserContainer = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    justify-content: flex-end;
    width          : 30%;

    @media(max-width: ${SMALL_DESKTOP}) {
        width          : auto;
    }
`;

export const IconContainer = styled.div`
    margin-right : 12px;
    cursor       : pointer;

    @media(max-width: ${MINI_TABLET}) {
        display: none;
    }
`;

export const UserWrapper = styled.div`
    cursor       : pointer;
    z-index      : 10000;
`;

export const UserAvatar = styled.img`
    width        : 44px;
    height       : 44px;
    border-radius: 25px;
    object-fit   : cover;
    border       : 3px solid white;
`;





export const Icon = styled.img`
    width       : 24px;
    height      : 24px;
    margin-left : 22px;
    cursor      : pointer;
`;

export const Avatar = styled.img`
    height        : 44px;
    width         : 44px;
    border-radius : 22px;
    margin-left   : 22px;
    cursor        : pointer;
`;

export const NotiContainer = styled.div`
    position: relative;
`;

export const BadgeWrapper = styled.div`
    width           : 20px;
    height          : 20px;
    border-radius   : 10px;
    background      : ${COLOR.primary1};
    display         : flex;
    align-items     : center;
    justify-content : center;
    position        : absolute;
    top             : -5px;
    left            : 36px;
    cursor          : pointer;

`;

export const Badge = styled.label`
    color       : ${COLOR.primary0};
    font-family : 'MuseoSansRouned500';
    font-size   : 15px;
    padding-top : 2px;
`;

export const LogoutBtn = styled.div`
    color       : white;
    font-family : 'MuseoSansRouned700';
    font-size   : 20px;
    cursor      : pointer;
    margin-top  : 20px;
`;

export const Text = styled.div`
    color       : white;
    font-family : 'MuseoSansRouned700';
    font-size   : 14px;
    margin-top  : 8px;
`;