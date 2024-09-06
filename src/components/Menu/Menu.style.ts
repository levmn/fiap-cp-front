import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    align-items: flex-end;
    border-top: 1px solid #d3d3d3;
`;

export const StyledWrapperMenu = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

export const StyledMenuItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;

    & a { 
        font-size: 0.9rem;
        color: #38aede;
    }
`;