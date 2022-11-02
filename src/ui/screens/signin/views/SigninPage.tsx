import React, { useState } from 'react';
import * as styled from './SigninPage.styled';
import GOOGLE from '../../../../assets/images/google.svg';
import FACEBOOK from '../../../../assets/images/facebook.svg';
import { validateEmail } from '../../../../utils/emailValidate';
import { toast } from 'react-toastify';
import { signin, signinFacebook, signinGoogle } from '../../../api/server/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../@core/Spinner';

type Props = {};

export const SigninPage: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loading = useSelector((state: any) => state.auth.loading);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goSignin = () => {
        if (loading) {
            return
        }
        if (validateEmail(email)) {
            if (password) {
                signin(dispatch, { email, password })
                    .then((res) => {
                        navigate('/reservations')
                    })
                    .catch((err) => {
                        toast(err, { type: 'error' })
                    })
            } else {
                toast("Please type your password!", { type: 'error' })
            }
        } else {
            toast("Email is not valid!", { type: 'error' })
        }
    }

    const goFacebookSignin = () => {
        if (loading) {
            return
        }
        signinFacebook(dispatch)
            .then((res) => {
                navigate('/reservations')
            }).catch((err) => {
                toast(err, { type: 'error' })
            })
    }

    const goGoogleSignin = () => {
        if (loading) {
            return
        }
        signinGoogle(dispatch)
            .then((res) => {
                navigate('/reservations')
            }).catch((err) => {
                toast(err, { type: 'error' })
            })
    }

    return (
        <styled.Container>
            <Spinner visible={loading} />
            <styled.Title>Sign In</styled.Title>
            <styled.Form>
                <styled.InputWrapper>
                    <styled.Label>Email Address</styled.Label>
                    <styled.Input
                        placeholder='Email'
                        type={'email'}
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                            if (loading) return
                            setEmail(e.target.value)
                        }}
                    />
                </styled.InputWrapper>
                <styled.InputWrapper>
                    <styled.Label>Password</styled.Label>
                    <styled.Input
                        placeholder='Password'
                        type={'password'}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => {
                            if (loading) return
                            setPassword(e.target.value)
                        }}
                    />
                </styled.InputWrapper>
                <styled.ForgotPassword>Forgot Password?</styled.ForgotPassword>
                <styled.LoginButton onClick={goSignin}>LOGIN</styled.LoginButton>
                <styled.Divider>
                    <styled.Line></styled.Line>
                    <styled.Text>Or</styled.Text>
                    <styled.Line></styled.Line>
                </styled.Divider>
                <styled.SocialContainer>
                    <styled.SocialButton onClick={goFacebookSignin}>
                        <img src={FACEBOOK} alt="facebook-sign" />
                    </styled.SocialButton>
                    <styled.SocialButton onClick={goGoogleSignin}>
                        <img src={GOOGLE} alt="google-sign" />
                    </styled.SocialButton>
                </styled.SocialContainer>
            </styled.Form>
        </styled.Container>
    )
}