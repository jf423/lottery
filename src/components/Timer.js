import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';

export default function Timer({
    className,
    countDown,
    disabled,
    candidateList,
    onCounting,
    onFinishCountDown
}) {
    const intervalId = useRef();
    const [timer, setTimer] = useState({ minutes: countDown, seconds: 0 });
    const { minutes, seconds } = timer;

    const count = () => {
        setTimer(preState => {
            const nextSecond = preState.seconds - 1;

            return {
                minutes: nextSecond < 0 ? preState.minutes - 1 : preState.minutes,
                seconds: nextSecond < 0 ? 59 : nextSecond
            };
        });
    };
    const onClickCountDown = () => {
        setTimer({ minutes: minutes - 1, seconds: 59 });
        onCounting(true);
        intervalId.current = window.setInterval(() => count(), 1000);
    };

    useEffect(() => {
        setTimer({ ...timer, minutes: countDown });
        return () => clearInterval(intervalId.current);
    }, [countDown]);
    useEffect(() => {
        if (candidateList.length > 0 && minutes === 0 && seconds === 0) {
            onCounting(false);
            clearInterval(intervalId.current);
            onFinishCountDown();
        }
    }, [timer]);
    
    return (
        <>
            <Content className={className}>
                <span>{minutes < 10 ? `0${minutes}` : minutes}:</span>
                <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </Content>
            <StartButton disabled={disabled || candidateList.length === 0} onClick={onClickCountDown} size="large" variant="outlined">
                開始
            </StartButton>
        </>
    );
}

export const Content = styled.div`
    width: 15rem;
    font-size: 5rem;
    color: #3e51b6;
`;

export const StartButton = styled(Button)`
    align-self: center;
`;
