import React from 'react';
import { COLOR } from '../../../../assets/colors';
import NOTHING from '../../../../assets/images/search-icon.png';
import * as styled from './Nothing.styled';

type Props = {};

export const Nothing: React.FC<Props> = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
            <styled.IMG src={NOTHING} alt='no-result'/>
            <div style={{ marginTop: 30, fontFamily: 'MuseoSansRouned900', fontSize: 24, color: COLOR.primary0 }}>Sorry... Nothing to show</div>
        </div>
    )
}