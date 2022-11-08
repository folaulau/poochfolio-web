import React from 'react';
import IMG404 from '../../../../assets/images/404.png';
import * as styled from './404.styled';

type Props = {};

export const Page404: React.FC<Props> = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <styled.IMG src={IMG404} alt='no-result'/>
        </div>
    )
}