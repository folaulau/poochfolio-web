import styled from 'styled-components';
import { MOBILE, TABLET } from '../../../../assets/screen';
import { SMALL_TABLET } from '../../../../assets/screen/screen';

export const Container = styled.div`
	display        : flex;
    justify-content: space-between;
    overflow-x     : hidden;

    @media(max-width: ${TABLET}) {
    }

    @media(max-width: ${SMALL_TABLET}) {
        overflow-x     : auto;
    }

    @media(max-width: ${MOBILE}) {
    }
`;