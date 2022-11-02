import React from 'react';
import NORESULT from '../../../../assets/images/noresult.png';
import * as styled from './NoResult.styled';

type Props = {};

export const NoResult: React.FC<Props> = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <styled.IMG src={NORESULT} alt='no-result'/>
        </div>
    )
}