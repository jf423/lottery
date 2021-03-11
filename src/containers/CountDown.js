import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import TimerControl from '../components/TimerControl.js';
import Timer from '../components/Timer.js';

import { setIsCountingAction, setWinnerIdAction } from '../ducks/modules/lottery.js';
import { flexColStartStart } from '../style/flex.css.js';

export default function CountDown({ className }) {
    const { isCounting, candidateList } = useSelector(state => state);
    const [countDown, setCountDown] = useState(0);

    const dispatch = useDispatch();
    const onCounting = (bool) => dispatch(setIsCountingAction(bool));
    const onFinishCountDown = () => {
        const luckyNumber = Math.floor(Math.random() * candidateList.length);
        dispatch(setWinnerIdAction(luckyNumber));
    };

    return (
        <Container className={className}>
            <h2>抽獎時間</h2>
            <TimerControl disabled={isCounting} countDown={countDown} onChangeCountDown={setCountDown} />
            <LotteryTimer
                candidateList={candidateList}
                disabled={isCounting}
                onCounting={onCounting}
                countDown={countDown}
                onFinishCountDown={onFinishCountDown}
            />
        </Container>
    );
}

export const Container = styled.div`
    ${flexColStartStart};
    flex-wrap: wrap;
`;

export const LotteryTimer = styled(Timer)`
    align-self: center;
    margin: 2rem 0;
`;
