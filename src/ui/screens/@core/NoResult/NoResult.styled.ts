import styled from 'styled-components';
import { MOBILE, SMALL_TABLET } from '../../../../assets/screen/screen';

export const IMG = styled.img`
    width     : 50%;
    object-fit: contain;

    @media(max-width: ${SMALL_TABLET}) {
        width     : 70%;
    }

    @media(max-width: ${MOBILE}) {
        width     : 90%;
    }
`;