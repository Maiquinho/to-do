import styled from 'styled-components';

interface StyledListProps {
    done: boolean;
}

export const StyledList = styled.div(({done} : StyledListProps): string => (
    `
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    margin: 8px 0;
    padding: 12px 16px;
    background: var(--light-color);
    
    input {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }
    label {
        flex: 1;
        color: var(--dark-color);
        text-decoration: ${ done ? 'line-through' : 'initial' };

        border-radius: var(--border-radius);
    }
    `
));