import styled from 'styled-components';


export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 48px;

    input {
        flex: 1;
        border: none;
        padding: 12px 16px;

        font-size: 1rem;

        &:focus, &:active {
            outline: none;
        }
    }
    label {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1rem;
        font-weight: bold;

        margin-left: 4px;
        padding: 12px 16px;

        background: var(--light-color);
        color: var(--dark-color);
    }
`;