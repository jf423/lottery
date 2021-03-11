import Head from 'next/head'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CountDown from '../src/containers/CountDown.js';
import CandidateList from '../src/containers/CandidateList.js';
import Winner from '../src/containers/Winner.js';

import {
    flexRowStartStart,
    flexRowCenterCenter,
    flexColStartStart
} from '../src/style/flex.css.js';

export default function App() {
    const { winnerId } = useSelector(state => state);

    return (
        <AppContainer>
            <Head>
                <title>Lottery App</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppContent>
                { winnerId === null &&
                    <>
                        <CountDownContent />
                        <CandidateListContent />
                    </>
                }
                { winnerId !== null && <WinnerContent />}
            </AppContent>
        </AppContainer>
    );
}

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    ${flexRowCenterCenter};
`;

export const AppContent = styled.div`
    position: relative;
    padding: 1.5rem;
    width: 40rem;
    height: 25rem;
    border: 1px solid #000;
    overflow: auto;
    ${flexRowStartStart};
    flex-wrap: wrap;

    @media (max-width: 768px) {
        border: none;
        width: 100%;
        height: 100%;
        padding: 0 1.5rem;
        ${flexColStartStart};
    }
`;

export const CountDownContent = styled(CountDown)`
    flex: 1;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
    }
`;

export const CandidateListContent = styled(CandidateList)`
    flex: 1;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
    }
`;

export const WinnerContent = styled(Winner)`
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        height: 100vh;
    }
`;
