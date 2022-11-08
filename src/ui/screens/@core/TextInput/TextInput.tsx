import React, { useCallback } from 'react';
import { ChangeEventHandler } from '../../@hooks/useInputState';
import * as styled from './TextInput.styled';

type Props = {
    label?: string;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    value?: string | number;
    type?: 'text' | 'number' | 'password';
    autoComplete?: string,
    onChange?: (value: string) => void;
    handleChangeEvent?: ChangeEventHandler;
    onKeyDown?: (key: string) => void;
};

export const TextInput: React.FC<Props> = ({
    label = '',
    placeholder,
    name,
    value,
    type = 'text',
    disabled = false,
    autoComplete,
    onChange,
    handleChangeEvent,
    onKeyDown
}) => {

    const onHandleChangeEvent = useCallback(
        (e: any) =>
            (onChange && onChange(e?.target?.value)) ||
            (handleChangeEvent &&
                handleChangeEvent({
                    target: {
                        name,
                        value: e?.target?.value,
                    },
                })),
        [handleChangeEvent, name, onChange]
    );

    return (
        <styled.Container>
            <styled.Label>{label}</styled.Label>
            <styled.Input
                value={value}
                disabled={disabled}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                onChange={onHandleChangeEvent}
                onKeyDown={(e) => onKeyDown && onKeyDown(e?.key)}
            />
        </styled.Container>
    )
}