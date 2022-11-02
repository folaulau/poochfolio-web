import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { MINI_TABLET, MOBILE } from '../../../../assets/screen';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export const Container = styled.div`
    display        : flex;
    flex-direction : row;
    width          : 100%;
    justify-content: center;

    @media(max-width: ${MINI_TABLET}) {
    }

    @media(max-width: ${MOBILE}) {
        
    }
`;

export const Dashboard = styled.div`
    width : 70%;
`;

export const CalendarBoard = styled.div`
    width : 30%;
    background: white;
    overflow-y: auto;
    padding-bottom: 50px;
`;

export const Header = styled.div`
    padding: 30px 40px;
`;

export const Title = styled.label`
    font-family: 'MuseoSansRouned700';
    font-size  : 18px;
    color      : ${COLOR.gray4};
`;

export const HeaderWrapper = styled.div`
    display       : flex;
    align-items   : center;
    justify-content : center;
    flex-direction: row;
`;

export const SearchBar = styled.div<{
    focus: boolean
}>`
    display       : flex;
    align-items   : center;
    flex-direction: row;
    padding-top   : 20px;
    border-bottom : 1px solid ${({ focus }) => !focus ? '#9697a361' : COLOR.primary0};
    width         : 55%;
`;

export const Toolbar = styled.div`
    width         : 45%;
    display       : flex;
    align-items   : center;
    justify-content : space-around;
    flex-direction: row;
`;

export const Search = styled.input`
    font-family: 'MuseoSansRouned300';
    font-size  : 15px;
    color      : ${COLOR.gray2};
    height     : 40px;
    outline    : none;
    border     : none;
    background : transparent;
    width      : 90%;
`;

export const Button = styled.div`
    display       : flex;
    align-items   : center;
    justify-content : center;
    flex-direction: row;
    height        : 46px;
    width         : 180px;
    border-radius : 23px;
    border        : 1px solid ${COLOR.primary1};
    cursor        : pointer;
    color         : ${COLOR.primary0};
    font-size     : 15px;
    font-family   : 'MuseoSansRouned700';

    &:hover {
        border        : 1px solid ${COLOR.primary0};
    }
`;

export const Table = styled.div<{
    isFullScreen: boolean
}>`
    padding      : 20px 00px;
    border-top   : ${({isFullScreen}) => !isFullScreen? `4px solid white` : null};
    position     : relative;
`;

export const TableHeader = styled.div`
    display       : flex;
    align-items   : center;
    justify-content : space-between;
    flex-direction: row;
    padding       : 0 40px;
`;

export const Filter = styled.div<{
    active: boolean,
    isFullScreen: boolean
}>`
    font-family : 'MuseoSansRouned700';
    font-size   : 18px;
    color       : ${({ active, isFullScreen }) => active ? isFullScreen ? 'white' : COLOR.gray4 : COLOR.gray5};
    cursor      : pointer;
`;

export const TableBody = styled.div<{
    isFullScreen: boolean
}>`
    overflow-y: auto;
    margin-top: 20px;
    max-height: ${({isFullScreen}) => isFullScreen ? `calc(100vh - 60px)` : '250px'};
    min-height: ${({isFullScreen}) => isFullScreen ? `calc(100vh - 60px)` : '250px'};
    padding   : 0 40px;
    
`;

export const NextButton = styled(GrFormNext)`
    color: #85D8E7;

    & > polyline {
        stroke: #85D8E7;
    }
`;

export const PrevButton = styled(GrFormPrevious)`
    color: #85D8E7;

    & > polyline {
        stroke: #85D8E7;
    }
`;

export const PriceContent = styled.label`
    font-family: 'MuseoSansRouned300';
    color      : #096B82;
    font-size  : 12px;
    margin-top : 6px;
`;

export const CalendarWrapper = styled.div`
    align-items   : center;
    display       : flex;
    flex-direction: column;
    margin-top    : 20px;
`;

export const CalendarHeader = styled.div`
    width          : 350px;
    display        : flex;
    align-items    : center;
    justify-content: space-between;
`;

export const CalendarBody = styled.div`
    display        : flex;
    justify-content: center;
    margin-top     : 20px;
`;

export const AnalyticsWrapper = styled.div`
    display        : flex;
    flex-direction : column;
    align-items: center;
`;

export const CalendarType = styled.div`
    display    : flex;
    align-items: center;
`;

export const Type = styled.div<{
    active: boolean
}>`
    font-size    : 15px;
    font-family  : 'MuseoSansRouned500';
    color        : ${({active}) => active ? COLOR.primary0 : '#BBBBBB'};
    border-bottom: 2px solid ${({active}) => active ? COLOR.primary0 : '#FFFFFF'};
    margin-left  : 16px;
    cursor       : pointer;
`;

export const Analytics = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    width         : 350px;
    justify-content: space-between;
`;

export const DetailWrapper = styled.div`
    display       : flex;
    flex-direction: column;
    wdith         : 50%;
`;

export const ChartWrapper = styled.div`
    width         : 50%;
    height        : 200px;
`;

export const Vacancy = styled.label`
    color        : #79D2E3;
    font-size    : 15px;
    font-family  : 'MuseoSansRouned500';
    margin-top   : 10px;
    margin-bottom: 6px;
`;

export const Occupancy = styled.label`
    color        : ${COLOR.primary0};
    font-size    : 15px;
    font-family  : 'MuseoSansRouned500';
`;

export const Revenue = styled.div`
    width: 350px;
`;

export const RevenueWrapper = styled.div`
    height : 160px;
`;

export const FullIcon = styled.div`
    position: absolute;
    top     : 4px;
    right   : 4px;
    cursor  : pointer;
`;