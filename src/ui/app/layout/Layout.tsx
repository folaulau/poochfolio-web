import { Content } from '../components/Content';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import * as styled from './Layout.styled';

export const Layout = () => {
    return (
        <styled.BodyWrapper>
            <Sidebar />
            <styled.ContentWrapper>
                <Header />
                <Content />
            </styled.ContentWrapper>
        </styled.BodyWrapper>
    )
}