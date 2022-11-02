import React from 'react';
import COMING_IMG from '../../../../assets/images/coming.png';
import * as styled from './Coming.styled';

type Props = {};

export const ComingPage: React.FC<Props> = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <styled.IMG src={COMING_IMG} alt='no-result'/>
        </div>
    )
}