import styled from 'styled-components';


export const StyledList = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    margin: 8px 0;
    padding: 12px 16px;
    background: var(--light-color);
    
    input {
        width: 25px;
        height: 25px;
        margin-right: 4px;
    }
    label {
        flex: 1;
        color: var(--dark-color);

        border-radius: var(--border-radius);
    }
`;