import styled from 'styled-components';
import { COLOR } from '../../../../../assets/colors';
import { MINI_TABLET, MOBILE, SMALL_TABLET } from '../../../../../assets/screen';
import { Nullable } from '../../../../../utils/nullable';

export const Container = styled.div`
    display        : flex;
    width          : 100%;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    max-width      : 800px;

    @media(max-width: ${SMALL_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MINI_TABLET}) {
        width          : 90%;
    }

    @media(max-width: ${MOBILE}) {
        width          : 90%;
    }
`;

export const Form = styled.form`
    display        : flex;
    flex-direction : column;
    width          : 100%;
    margin-top     : 30px;
    border-radius  : 14px;
`;

export const Table = styled.table`
    width        : 100%;
    background   : white;
    border       : 1px solid ${COLOR.primary6};
    border-radius: 24px;
    box-shadow   : 0px 10px 15px #DFECFF;

    @media(max-width: ${MINI_TABLET}) {
       display : none;
    }

`;

export const Thead = styled.thead`
    box-shadow   : 0px 10px 15px 0px #dfecff;
    border-radius: 24px 24px 0 0;
    width        : 100%;

    & > tr > th:first-child {
        width       : 30%;
        padding-left: 30px;
        text-align  : left;
    }

    & > tr > th:last-child {
        width       : 10%;
    }
`;

export const Th = styled.th`
    font-size  : 15px;
    font-family: 'MuseoSansRouned500';
    color      : ${COLOR.gray4};
    padding    : 30px 16px 16px 16px;
    width      : 20%;
    font-weight: 500;
`;

export const Tbody = styled.tbody`
    & > tr:last-child > td {
        text-align: center;
    }

    & > tr:last-child > td > div {
        display        : flex;
        align-items    : center;
        justify-content: center;
        flex-direction : row;
        cursor         : pointer;

        & > span {
            padding-top : 4px;
            margin-left : 10px;
            font-size  : 15px;
            font-family: 'MuseoSansRouned500';
            color      : ${COLOR.primary0};
        }
    }
`;

export const Tr = styled.tr`
    & > td:first-child {
        width: 30%;
        text-align : left;
        padding-left: 30px;
    }

    & > td:last-child {
        width: 10%;
        cursor: pointer;
    }
`;

export const Td = styled.td`
    font-size  : 15px;
    font-family: 'MuseoSansRouned500';
    color      : ${COLOR.gray2};
    padding    : 20px;
    width      : 20%;
    text-align : center;

    & > input {
        height       : 36px;
        width        : 78px;
        border-radius: 18px;
        background   : ${COLOR.primary4};
        border       : 1px solid ${COLOR.primary4};
        outline      : none;
        text-align   : center;
        color        : #41A3BB;
        font-size    : 15px;
        font-family  : 'MuseoSansRouned700';
        padding      : 0 14px;

        &:focus {
            border: 1px solid ${COLOR.primary0};
        }
    }
`;

export const BookingContainer = styled.div`
    background: white;
    margin-top: 30px;
    padding   : 30px;
    border-radius: 24px;
    box-shadow   : 0px 10px 15px #DFECFF;
    border       : 1px solid ${COLOR.primary6};
`;

export const BookingHeader = styled.div`
    display        : flex;
    justify-content: space-between;
    align-items    : center;
`;

export const Title = styled.label`
    color      : #2A8CA6;
    font-size  : 15px;
    font-family: 'MuseoSansRouned700';
`;

export const List = styled.div``;

export const Text = styled.label`
    color      : ${COLOR.gray2};
    font-size  : 12px;
    font-family: 'MuseoSansRouned500';
`;

export const Fieldset = styled.div`
    display        : flex;
    justify-content: space-between;
    align-items    : center;
    margin-top     : 30px;

    @media(max-width: ${MINI_TABLET}) {
        flex-direction: column;
     }
`;

export const Legend = styled.label`
    color      : ${COLOR.gray2};
    font-size  : 15px;
    font-family: 'MuseoSansRouned700';

    @media(max-width: ${MINI_TABLET}) {
        margin-bottom: 10px;
     }
`;

export const Group = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    width         : 170px;
    justify-content: space-between;
`;

export const ChargeInput = styled.input`
    height       : 36px;
    width        : 100px;
    border-radius: 18px;
    background   : ${COLOR.primary4};
    border       : 1px solid ${COLOR.primary1};
    outline      : none;
    text-align   : center;
    color        : #41A3BB;
    font-size    : 15px;
    font-family  : 'MuseoSansRouned700';
    padding      : 0 14px;

    &:focus {
        border: 1px solid ${COLOR.primary0};
    }
`;

export const OcupancyContainer = styled.div`
    margin-top : 20px;
`;


export const InputWrapper = styled.div`
    display        : flex;
    flex-direction : column;
    margin-top     : 70px;
`;

export const Label = styled.label`
    font-size  : 12px;
    font-family: 'MuseoSansRouned500';
    color      : ${COLOR.gray2};
`;

export const Input = styled.textarea`
    margin-top : 10px;
    height     : 100px;
    width      : calc(100% - 40px);
    padding    : 20px;
    border-radius: 23px;
    outline    : none;
    color      : ${COLOR.gray4};
    font-size  : 15px;
    font-family: 'MuseoSansRouned500';
    background : transparent;
    border     : 2px solid ${COLOR.primary1};
    resize     : none;

    &:focus {
        border    : 2px solid ${COLOR.primary0};
    }
`;

export const Dropzone = styled.div<{
    isDragActive?: Nullable<boolean>;
}>`
    display        : flex;
    align-items    : center;
    justify-content: center;
    flex-direction : column;
    height         : auto;
    border         : 2px solid ${COLOR.primary1};
    border-radius  : 24px;
    padding        : 20px;
    min-height     : 140px;
    margin-top     : 30px;
    cursor         : pointer;

    ${({ isDragActive }) => (
        isDragActive ? 
        `border: 2px solid ${COLOR.primary0};` : 
        `border: 2px solid ${COLOR.primary1};`
      )}

    &:hover {
        border         : 2px solid ${COLOR.primary0};
        border-style   : dashed;
    }

    border-style   : dashed;

`;

export const LoginButton = styled.div`
    height    : 46px;
    width     : 100%;
    border-radius: 23px;
    cursor     : pointer;
    background : ${COLOR.primary0};
    color      : white;
    font-size  : 15px;
    font-family: 'MuseoSansRouned700';
    display    : flex;
    align-items: center;
    justify-content: center;
    margin-top : 60px;
    max-width  : 500px;
    align-self : center;

    &:hover {
        background : ${COLOR.primary1};
    }
`;

export const CustomModal = styled.div`
    display        : flex;
    width          : 100%;
    height         : 100%;
    align-items    : center;
    flex-direction : column;
    justify-content: space-between;
`;


export const ModalHeader = styled.div`
    display        : flex;
    align-items    : center;
    width          : calc(100% - 40px);
    justify-content: space-between;
    background     : ${COLOR.primary3};
    padding        : 10px 20px;
`;

export const ModalTitle = styled.label`
    font-size  : 18px;
    font-family: 'MuseoSansRouned700';
    color      : ${COLOR.primary0};
`;

export const AddIcon = styled.div`
    cursor: pointer;
`;

export const ModalBody = styled.div`
    display        : flex;
    flex-direction : column;
    width          : 100%;
    height         : 100%;
    overflow-y     : auto;
`;

export const ModalFooter = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
    background     : ${COLOR.primary3};
    padding        : 10px 20px;
    width          : calc(100% - 40px);
    padding        : 10px 20px;
    position       : relative;
`;

export const ServiceInput = styled.input`
    height       : 46px;
    width        : 80%;
    padding      : 0 20px;
    border       : 2px solid ${COLOR.primary1};
    border-radius: 23px;
    outline      : none;
    font-family  : 'MuseoSansRouned500';
    font-size    : 15px;
    color        : ${COLOR.gray4};
`;

export const ServicePutIcon = styled.div`
    position: absolute;
    right   : 10%;
    cursor  : pointer;
`;

export const ServiceRow = styled.div`
    font-family : 'MuseoSansRouned500';
    color       : ${COLOR.gray2};
    font-size   : 15px;
    padding     : 15px 20px;
    border-bottom: 1px solid #00000010;

    &:first-child {
        margin-top: 10px;
    }
`;