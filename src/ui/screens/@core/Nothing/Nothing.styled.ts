import styled from 'styled-components';
import { MOBILE, SMALL_TABLET } from '../../../../assets/screen/screen';

export const IMG = styled.img`
    width     : 100px;
    object-fit: contain;

    @media(max-width: ${SMALL_TABLET}) {
        width     : 100px;
    }

    @media(max-width: ${MOBILE}) {
        width     : 100px;
    }
`;