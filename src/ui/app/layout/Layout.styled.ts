import styled from 'styled-components';
import { COLOR } from '../../../assets/colors';
import { MOBILE, SMALL_DESKTOP } from '../../../assets/screen/screen';

export const BodyWrapper = styled.div`
	display        : flex;
	flex-direction : row;
	justify-content: space-between;
	width          : 100%;
	height         : 100vh;
	background     : ${COLOR.background0};
`;

export const ContentWrapper = styled.div`
	display                  : flex;
	flex-direction           : column;
	width                    : 100%;
	border-top-left-radius   : 20px;
	border-bottom-left-radius: 20px;
	margin-left              : -20px;
	background               : ${COLOR.background0};

	@media(max-width: ${SMALL_DESKTOP}) {
    }

	@media(max-width: ${MOBILE}) {
	}
`;