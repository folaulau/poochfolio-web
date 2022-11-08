import React from 'react'
import { Outlet } from 'react-router-dom';
import * as styled from './Content.styled';

const Content = () => {
    return (
        <styled.Container>
            <Outlet />
        </styled.Container>
    )
}

export default React.memo(Content)