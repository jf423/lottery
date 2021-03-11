import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import Candidate from '../components/Candidate.js';
import CandidateControl from '../components/CandidateControl.js';

import { updateCandidateListAction } from '../ducks/modules/lottery.js';

import { flexColStartStart, flexRowStartCenter } from '../style/flex.css.js';

export default function CandidateList({ className }) {
    const { isCounting, candidateList } = useSelector(state => state);

    const dispatch = useDispatch();
    const onChangeCandidate = (data) => {
        dispatch(updateCandidateListAction(data));
    };
    const onDeleteCandidate = (index) => {
        const data = candidateList.filter((v, k) => k !== index);
    
        dispatch(updateCandidateListAction(data));
    };

    return (
        <Container className={className}>
            <h2>參與抽獎名單</h2>
            <List>
                { candidateList.map((name, key) =>
                    <Item key={key}>
                        <LotteryCandidate name={name} />
                        <CloseButton disabled={isCounting} onClick={() => onDeleteCandidate(key)} aria-label="add">
                            <CloseIcon fontSize="small"/>
                        </CloseButton>
                    </Item>
                )}
            </List>
            <CandidateControl disabled={isCounting} candidateList={candidateList} onChangeCandidate={onChangeCandidate} />
        </Container>
    );
}

export const Container = styled.div`
    ${flexColStartStart};
    flex-wrap: wrap;
`;

export const List = styled.ul`
    border: 1px solid #000;
    padding: 0.5rem 1rem;
    margin: 0;
    width: -webkit-fill-available;
    height: 15rem;
    overflow-y: auto;
`;

export const Item = styled.li`
    margin: .25rem 0;
    padding: 0;
    ${flexRowStartCenter};
    justify-content: space-between;
`;

export const LotteryCandidate = styled(Candidate)`
    max-width: 12rem;
`;

export const CloseButton = styled(IconButton)`
    padding: 0;
`;
