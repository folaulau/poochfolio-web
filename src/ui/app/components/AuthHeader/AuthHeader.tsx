import * as styled from './AuthHeader.styled';
import HEADER_BACKGROUND from '../../../../assets/images/header-background.svg';
import LOGO from '../../../../assets/images/Logo.svg';
import SUPPORT from '../../../../assets/images/support.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { onShowLiveChat } from '../../../../support';

export const AuthHeader = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const goPage = () => {
        if(pathname === '/signin') {
            navigate('/signup')
        } else {
            navigate('/signin')
        }
    }

    const goSupport = () => {
        onShowLiveChat()
    }
    
    return (
        <styled.Container backgroundImage={HEADER_BACKGROUND}>
            <styled.LogoContainer href='/'>
                <styled.Logo src={LOGO} alt="auth-logo" />
            </styled.LogoContainer>
            <styled.Wrapper>
                <styled.LoginButton onClick={goPage}>
                    <styled.Text>{pathname === '/signin' ? 'Sing Up' : 'Login'}</styled.Text>
                </styled.LoginButton>
                <styled.SupportButton onClick={goSupport}>
                    <styled.SupportImage src={SUPPORT} alt="support" />
                    <styled.Text color={'white'}>Support</styled.Text>
                </styled.SupportButton>
            </styled.Wrapper>
        </styled.Container>
    )
}