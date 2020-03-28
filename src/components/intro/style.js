import styled from 'styled-components';

export const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    padding: 3rem 0;
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.brightWhiteDarker};
`

export const Box = styled.div`
    align-content: center;
`

export const Title = styled.h1`
    font-family: "SFProDisplay", Helvetica, sans-serif;
    color:  ${props => props.theme.colors.classicBlue};
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 1.0rem 0;
    text-transform: none;
`

export const Subtitle = styled.h1`
    font-family: "SFProDisplay", Helvetica, sans-serif;
    color:  ${props => props.theme.colors.classicBlue};
    font-size: 1.7rem;
    font-weight: 500;
    text-align: left;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
`