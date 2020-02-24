import styled from 'styled-components'

export const Wrapper = styled.section`
    height: 100%;
    display: grid;
    grid-template-areas:
        "header content"
        "footer content";
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 1fr; 
    align-items: flex-end;
`;