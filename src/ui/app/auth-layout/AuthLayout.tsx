import React from 'react';
import { AuthFooter } from '../components/AuthFooter';
import { AuthHeader } from '../components/AuthHeader';
import { Content } from '../components/Content';
import * as styled from './AuthLayout.styled';

type Props = {}

export const AuthLayout: React.FC<Props> = () => {
    return (
        <styled.BodyWrapper id="auth_layout">
            <AuthHeader />
            <div className='main_component' style={{ paddingTop: 86 }}>
                <Content />
            </div>
            <AuthFooter />
        </styled.BodyWrapper>
    )
}