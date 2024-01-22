import * as styled from './Header.styled';
import DOG from '../../../../assets/images/sample/dog.jpeg';
import AVATAR from '../../../../assets/images/sample/avatar.jpeg';
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';
import { COLOR } from '../../../../assets/colors';
import { useState } from 'react';
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../../api/server/auth';
import { toast } from 'react-toastify';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
}

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state : any) => state.auth.user);

    const onLogout = () => {
        signout(dispatch)
        .then(() => {
            setIsOpen(false)
        })
        .catch((err) => {
            toast(err, { type: 'error' })
        })
    }

    return (
        <styled.Container>
            <styled.PoochContainer>
                <styled.PoochAvatar src={DOG} />
                <styled.PoochName>Marina Pet Spa</styled.PoochName>
            </styled.PoochContainer>
            <styled.ChatContainer>
                <styled.Input
                    placeholder='Type chat here...'
                />
                <styled.ChatIcon>
                    <BsChatDots color='white' size={24} />
                </styled.ChatIcon>
            </styled.ChatContainer>
            <styled.UserContainer>
                <styled.IconContainer>
                    <AiOutlineSetting size={24} color={COLOR.primary0} />
                </styled.IconContainer>
                <styled.IconContainer>
                    <IoNotificationsOutline size={24} color={COLOR.primary0} />
                </styled.IconContainer>
                <styled.UserWrapper onClick={() => setIsOpen(!isOpen)}>
                    <styled.UserAvatar src={AVATAR} />
                </styled.UserWrapper>
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                    style={{
                        position: 'fixed',
                        right: 0,
                        top: 94,
                        width: 250,
                        zIndex: 10000,
                        background: '#077997',
                        padding: 30,
                        boxShadow: '15px 1px 35px #07799746'
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        <styled.Text>You are logged in with</styled.Text>
                        <styled.Text>Email: {user?.email}</styled.Text>
                        <styled.LogoutBtn onClick={onLogout}>Logout</styled.LogoutBtn>
                        <div onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: -20, right: -10, cursor: 'pointer' }}>
                            <AiOutlineClose size={28} color='white' />
                        </div>
                    </div>
                </motion.nav>
            </styled.UserContainer>
        </styled.Container>
    )
}