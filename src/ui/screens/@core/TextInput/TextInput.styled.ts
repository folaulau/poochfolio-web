import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';

export const Container = styled.div`
    margin-top   : 10px;
    margin-bottom: 10px;
    width        : 100%;
`;

export const Label = styled.label`
    font-size  : 12px;
    font-family: 'MuseoSansRouned500';
    color      : ${COLOR.gray2};
`;

export const Input = styled.input`
    height       : 48px;
    width        : calc(100% - 32px);
    padding-left : 30px;
    border-radius: 14px;
    border       : 1px solid ${COLOR.primary1};
    font-size    : 16px;
    font-family  : 'MuseoSansRouned300';
    color        : ${COLOR.primary0};
    outline      : none;
    background   : white;
    margin-top   : 12px;
    box-shadow    : 0px 0px 10px rgba(148, 153, 169, 0.2);

    &:focus {
        border: 1px solid ${COLOR.primary0};
    }

    &:active {
        border: 1px solid ${COLOR.primary0};
    }
`;