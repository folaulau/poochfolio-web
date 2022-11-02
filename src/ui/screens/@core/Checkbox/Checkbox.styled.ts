import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';
import { Nullable } from '../../../../utils/nullable';


export const Wrapper = styled.div<{
    checked: Nullable<boolean>
}>`
    align-items: center;
    display    : flex;

    & > label {
        margin-left: 10px;
        color: ${COLOR.gray2};
        font-family: 'MuseoSansRouned700';
        font-size: 15px;
        padding-top: 4px;
    }

    & > input {
        height : 26px;
        width  : 26px;
        border-radius: 5px;
        color  : ${COLOR.primary0};
        border : 1px solid ${COLOR.primary0};
        outline: none;
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        cursor: pointer;

        // ${({checked}) => checked ? `background-color: #077997;` : null}
        // ${({checked}) => checked ? `position: relative;` : null}

        &:focus {
            box-shadow: 0 0 1px #077997;
        }

        &::before {
            content: "\2714";
            font-size: 22px;
            color: #fff;
            position: absolute;
            right: 2px;
            top: -2px;
        }
    }
`;