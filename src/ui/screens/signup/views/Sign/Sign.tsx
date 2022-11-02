import React, { useState } from 'react';
import * as styled from './Sign.styled';
import GOOGLE from '../../../../../assets/images/google.svg';
import FACEBOOK from '../../../../../assets/images/facebook.svg';
import { Spinner } from '../../../@core/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { signup, signupFacebook, signupGoogle } from '../../../../api/server/auth';
import { validateEmail } from '../../../../../utils/emailValidate';
import { toast } from 'react-toastify';

type Props = {
};

export const Sign: React.FC<Props> = ({
}) => {
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.auth.loading);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signupWithFacebook = () => {
        if (loading) {
            return
        }
        signupFacebook(dispatch)
            .then((res) => { })
            .catch((err) => {
                toast(err, { type: 'error' })
            })
    }

    const signupWithGoogle = () => {
        if (loading) {
            return
        }
        signupGoogle(dispatch)
            .then((res) => { })
            .catch((err) => {
                toast(err, { type: 'error' })
            })
    }

    const goSignup = () => {
        if (loading) {
            return
        }

        if (validateEmail(email)) {
            if (password) {
                if (password.length > 6) {
                    if (password === confirmPassword) {
                        signup(dispatch, { email, password })
                            .then((res) => { })
                            .catch((err) => {
                                toast(err, { type: 'error' })
                            })
                    } else {
                        toast("Password doesn't match!", { type: 'error' })
                    }
                } else {
                    toast("Password length should be more than 6 length", { type: 'error' })
                }
            } else {
                toast("Please type your password!", { type: 'error' })
            }
        } else {
            toast("Email is not valid!", { type: 'error' })
        }
    }

    return (
        <styled.Container>
            <Spinner visible={loading} />
            <styled.Form>
                <styled.SocialContainer>
                    <styled.SocialButton onClick={signupWithFacebook}>
                        <img src={FACEBOOK} alt="facebook-sign" />
                    </styled.SocialButton>
                    <styled.SocialButton onClick={signupWithGoogle}>
                        <img src={GOOGLE} alt="google-sign" />
                    </styled.SocialButton>
                </styled.SocialContainer>
                <styled.Divider>
                    <styled.Line></styled.Line>
                    <styled.Text>Or</styled.Text>
                    <styled.Line></styled.Line>
                </styled.Divider>
                <styled.InputWrapper>
                    <styled.Label>Email Address</styled.Label>
                    <styled.Input
                        placeholder='Email'
                        type={'email'}
                        autoComplete="email"
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
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => {
                            if (loading) return
                            setPassword(e.target.value)
                        }}
                    />
                </styled.InputWrapper>
                <styled.InputWrapper>
                    <styled.Label>Confirm Password</styled.Label>
                    <styled.Input
                        placeholder='Confirm Password'
                        type={'password'}
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(e) => {
                            if (loading) return
                            setConfirmPassword(e.target.value)
                        }}
                    />
                </styled.InputWrapper>
                <styled.LoginButton onClick={goSignup}>SIGN UP</styled.LoginButton>
            </styled.Form>
        </styled.Container>
    )
}