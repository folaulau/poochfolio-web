import React from 'react';
import * as styled from './MenuButton.styled';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { COLOR } from '../../../../../../assets/colors';

type Props = {
    id: string,
    link: string,
    icon: any,
    activeIcon: any,
    title: string,
    active: boolean,
    query?: string
};

export const MenuButton: React.FC<Props> = ({
    id,
    link,
    icon,
    activeIcon,
    title,
    active,
}) => {
    return (
        <styled.Container key={id} active={active} href={link}>
            <styled.Main>
                <styled.IconWrapper active={active}>
                    <styled.Icon src={active ? activeIcon : icon} />
                </styled.IconWrapper>
                <styled.Title active={active}>{title}</styled.Title>
            </styled.Main>
            <styled.Plus>
                <AiOutlinePlusCircle size={20} color={COLOR.primary0} />
            </styled.Plus>
        </styled.Container>
    )
}