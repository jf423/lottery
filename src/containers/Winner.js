import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';

import Candidate from '../components/Candidate.js';

import { setWinnerIdAction, updateCandidateListAction } from '../ducks/modules/lottery.js';

import { flexColStartCenter } from '../style/flex.css.js';

export default function Winner({ className }) {
    const { winnerId, candidateList } = useSelector(state => state);
    const winner = candidateList.find((v, k) => k === winnerId);

    const dispatch = useDispatch();
    const resetWinner = () => {
        dispatch(setWinnerIdAction(null));
        dispatch(updateCandidateListAction([]));
    };

    return (
        <Container className={className}>
            <h2>抽獎結果</h2>
            <WinnerCandidate name={winner} />
            <IconButton onClick={resetWinner} aria-label="replay">
                <ReplayIcon fontSize="large"/>
            </IconButton>
        </Container>
    );
}

export const Container = styled.div`
    ${flexColStartCenter};
    justify-content: space-between;
`;

export const WinnerCandidate = styled(Candidate)`
    transform: scale(5);
`;

