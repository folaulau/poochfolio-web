import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { MOBILE, TABLET } from '../../../../assets/screen';
import { DESKTOP, SMALL_DESKTOP, SMALL_TABLET } from '../../../../assets/screen/screen';
import { Nullable } from '../../../../utils/nullable';

export const Container = styled.div<{
    backgroundImage: any;
}>`
	display          : flex;
    align-items      : center;
    justify-content  : space-between;
    background-image : url(${({ backgroundImage }) => backgroundImage});
    background-size  : cover;
    padding        : 20px 16%;
    position       : fixed;
    width          : 68%;
    z-index        : 10;

    @media(max-width: ${DESKTOP}) {
        padding        : 20px 10%;
        width          : 80%;
    }

    @media(max-width: ${TABLET}) {
        padding        : 20px 5%;
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

export const LogoContainer = styled.a`

`;

export const Logo = styled.img`
    width     : 142px;
    object-fit: contain;
    cursor    : pointer;
`;

export const Wrapper = styled.div`
    display          : flex;
    align-items      : center;
`;

export const LoginButton = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    background     : ${COLOR.primary4};
    border-radius  : 26px;
    color          : ${COLOR.primary0};
    font-family    : 'MuseoSansRouned500';
    font-size      : 15px;
    cursor         : pointer;
    margin         : 0px 10px;
    padding        : 14px 28px;

    &:hover {
        background: ${COLOR.primary1};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin     : 0px 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        // display: none;
    }
`;

export const Text = styled.label<{
    color?: Nullable<string>;
}>`
    font-size   : 15px;
    color       : ${({ color }) => color ? color : COLOR.primary0};
    font-family : 'MuseoSansRouned500';
    cursor      : pointer;
`;

export const SupportButton = styled.div`
    display        : flex;
    flex-direction : row;
    align-items    : center;
    justify-content: center;
    background     : transparent;
    border-radius  : 26px;
    border         : 2px solid white;
    color          : white;
    font-family    : 'MuseoSansRouned500';
    font-size      : 15px;
    cursor         : pointer;
    margin-left    : 10px;
    padding        : 12px 24px;

    &:hover {
        background: ${COLOR.primary1};
    }

    @media(max-width: ${SMALL_DESKTOP}) {
        margin-left: 4px;
    }

    @media(max-width: ${SMALL_TABLET}) {
        margin-right: 20px;
    }

    @media(max-width: ${MOBILE}) {
        display : none;
    }
`;

export const SupportImage = styled.img`
    height       : 24px;
    width        : 24px;
    object-fit   : contain;
    margin-right : 14px;
`;