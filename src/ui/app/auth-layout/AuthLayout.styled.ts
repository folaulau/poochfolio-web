import styled from 'styled-components';
import { COLOR } from '../../../assets/colors';
import { MOBILE, SMALL_TABLET } from '../../../assets/screen/screen';

export const BodyWrapper = styled.div`
	display        : flex;
	flex-direction : column;
	justify-content: space-between;
	width          : 100%;
	height         : 100vh;
	background     : ${COLOR.background0};

	@media(max-width: ${SMALL_TABLET}) {
		// padding        : 10px;
		// width          : calc(100% - 20px);
		// height         : calc(100vh - 28px);
	}

	@media(max-width: ${MOBILE}) {
		// padding        : 5px;
		// width          : calc(100% - 10px);
		// height         : calc(100vh - 10px);
	}
`;