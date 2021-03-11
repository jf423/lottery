import { useState } from 'react';
import styled from 'styled-components';

import { Button, TextField, IconButton } from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function CandidateControl({ disabled, candidateList, onChangeCandidate }) {
    const [name, setName] = useState('');
    const [valid, setValid] = useState(true);

    const onAddCandidate = () => {
        const isValid = name && candidateList.findIndex(v => v === name) === -1;
        setValid(isValid);

        if (!disabled && isValid) {
            onChangeCandidate(candidateList.concat(name));
            setName('');
        }
    };
    const onKeyDown = (event) => {
        if (event && event.keyCode === 13) {
            onAddCandidate();
        }
    };
    const onChange = (event) => {
        if (event && event.target) {
            setValid(true);
            setName(event.target.value);   
        }
    };
    return (
        <Control>
            <TextField
                disabled={disabled}
                helperText={!valid && 'Repeated'}
                error={!valid} onKeyDown={onKeyDown}
                value={name}
                onChange={onChange}
                id="standard-basic"
                label="姓名"
            />
            <IconButton disabled={disabled} onClick={onAddCandidate} aria-label="add">
                <PersonAddIcon />
            </IconButton>
        </Control>
    );
}

export const ControlButton = styled(Button)``;

export const Control = styled.div`
    margin-top: .25rem;
`;
