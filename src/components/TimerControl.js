import { useState } from 'react';
import styled from 'styled-components';

import { Button, TextField } from '@material-ui/core';

import { flexRowStartCenter } from '../style/flex.css.js';

export default function TimerControl({ disabled, countDown, onChangeCountDown }) {
    const [timer, setTimer] = useState(countDown);

    const setCountDown = () => {
        if (disabled) return;
        const value = Number(timer);

        setTimer(value);
        onChangeCountDown(value);
    };
    const onChangeTimer = (event = {}) => {
        if (!event.target) return;

        const { value } = event.target;
        if (value.match(/^[0-9]*$/g) && value < 60) {
            setTimer(value);
        }
    };
    const onFocus = () => {
        setTimer('');
    };
    const onKeyDown = (event) => {
        if (event && event.keyCode === 13) {
            setCountDown();
        }
    };
    return (
        <Control>
            <TextField
                disabled={disabled} 
                helperText="Number Only (0~59)"
                value={timer}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onChange={onChangeTimer}
                label="分鐘"
                variant="outlined"
            />
            <ControlButton disabled={disabled} onClick={setCountDown} variant="contained" color="primary">設定</ControlButton>
        </Control>
    );
}

export const ControlButton = styled(Button)``;

export const Control = styled.div`
    ${flexRowStartCenter};
    align-items: baseline;

    ${ControlButton} {
        margin-left: 1rem;
    }
`;
