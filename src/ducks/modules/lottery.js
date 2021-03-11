import { createAction } from 'redux-actions';

export const initialState = {
    winnerId: null,
    isCounting: false,
    candidateList: []
};

export const SET_WINNER_ID = 'SET_WINNER_ID';
export const SET_IS_COUNTING = 'SET_IS_COUNTING';
export const UPDATE_CANDIDATE_LIST = 'UPDATE_CANDIDATE_LIST';

export const setWinnerIdAction = createAction(SET_WINNER_ID);
export const setIsCountingAction = createAction(SET_IS_COUNTING);
export const updateCandidateListAction = createAction(UPDATE_CANDIDATE_LIST);

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_WINNER_ID: {
        const newState = {
            ...state,
            winnerId: action.payload
        };
        return newState;
    }
    case SET_IS_COUNTING: {
        const newState = {
            ...state,
            isCounting: action.payload
        };
        return newState;
    }
    case UPDATE_CANDIDATE_LIST: {
        const newState = {
            ...state,
            candidateList: action.payload
        };
        return newState;
    }
    default: {
        return { ...state };
    }
    }
};

export default reducer;
