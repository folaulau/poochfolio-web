import * as styled from './Header.styled';
import DOG from '../../../../assets/images/sample/dog.jpeg';
import NOTIFICATION from '../../../../assets/images/notification.svg';
import AVATAR from '../../../../assets/images/sample/avatar.jpeg';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';
import { useCallback, useState } from 'react';
import { COLOR } from '../../../../assets/colors';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenuVisibility = useCallback(() => setShowMenu((prev) => !prev), []);
    const onCloseMenu = useCallback(() => setShowMenu(false), []);

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
                <styled.UserWrapper>
                    <styled.UserAvatar src={AVATAR}/>
                </styled.UserWrapper>
            </styled.UserContainer>
        </styled.Container>
    )
}