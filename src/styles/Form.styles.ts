import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    label {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: #6c757d;
    }
`;

export const StyledButtonIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        opacity: 0.8;
    }
`;

export const ItemWrapper = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 0.75rem;
`;

export const ItemList = styled.ul`
    margin: 1rem 0;
    padding: 0;
    list-style-type: none;
    font-size: 1rem;
`;

export const ItemDiv = styled.hr`
    margin: 0.5rem 0;
    border: 0;
    border-top: 1px solid #d3d3d3;
    width: 100%;
`;
