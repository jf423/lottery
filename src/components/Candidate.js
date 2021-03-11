import styled from 'styled-components';

import FaceIcon from '@material-ui/icons/Face';

import { flexRowStartCenter } from '../style/flex.css.js';

export default function Candidate({ className, name }) {
    return (
        <Item className={className}>
            <Icon />
            <Text>{name}</Text>
        </Item>
    );
}

export const Icon = styled(FaceIcon)``;

export const Item = styled.div`
    ${flexRowStartCenter};
    ${Icon} {
        margin-right: .5rem;
    }
`;

export const Text = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
