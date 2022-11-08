import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { MOBILE, TABLET } from '../../../../assets/screen';

export const Container = styled.div`
	display        : flex;
	flex-direction : column;
    align-items    : center;
    width          : 280px;
    height         : 100%;
    background     : ${COLOR.primary0};
    padding-left   : 20px;
    padding-right  : 28px;
    overflow-y     : auto;
    overflow-x     : hidden;

    @media(max-width: ${TABLET}) {
        width          : 80px;
        min-width       : 80px;
        padding-left   : 8px;
    }

    @media(max-width: ${MOBILE}) {
        width          : 50px;
        min-width      : 50px;
    }
`;

export const Logo = styled.img`
    width         : 123px;
    height        : 55px;
    cursor        : pointer;
    margin        : 50px 0;

    @media(max-width: ${TABLET}) {
        width         : 70px;
        margin-bottom : 40px;
    }

    @media(max-width: ${MOBILE}) {
        width         : 46px;
        margin-bottom : 20px;
        margin        : 10px 0;
	}
`;

export const Listing = styled.div`
    width          : 199px;
    display        : flex;
    justify-content: space-between;
    align-items    : center;
    margin-bottom  : 30px;

    @media(max-width: ${TABLET}) {
        flex-direction: column;
        width          : auto;
    }
`;

export const Text = styled.label`
    font-family: 'MuseoSansRouned700';
    font-size  : 15px;
    color      : white;

    @media(max-width: ${MOBILE}) {
        font-size  : 12px;
    }
`;