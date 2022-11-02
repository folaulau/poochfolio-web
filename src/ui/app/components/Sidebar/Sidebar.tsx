import * as styled from './Sidebar.styled';
import LOGO from '../../../../assets/images/Logo.svg';
import { MenuButton } from './module/menu-button';
import { MENU } from './Sidebar.config';
import Switch from "react-switch";
import { COLOR } from '../../../../assets/colors';
import { useLocationQuery } from '../../../../utils/useLocationQuery';

export const Sidebar = () => {
    const pathname = useLocationQuery();

    return (
        <styled.Container>
            <styled.Logo src={LOGO} alt="logo" />
            <styled.Listing>
                <styled.Text>LISTING</styled.Text>
                <Switch
                    className="book-switch"
                    onChange={() => { }}
                    onColor={'#78d890'}
                    offColor={COLOR.gray5}
                    checked={false}
                    checkedIcon={<span style={{ color: COLOR.primary0, fontFamily: 'MuseoSansRouned500', fontSize: 12, paddingTop: 2 }}>ON</span>}
                    uncheckedIcon={<span style={{ color: 'white', fontFamily: 'MuseoSansRouned500', fontSize: 12, paddingTop: 2 }}>OFF</span>}
                />
            </styled.Listing>
            {MENU.map((menu, index) => {
                return (
                    <MenuButton
                        {...menu}
                        active={pathname === menu.link}
                        key={menu.id}
                    />
                )
            })}
        </styled.Container>
    )
}