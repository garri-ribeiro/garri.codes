import styled from 'styled-components';

export const Wrapper = styled.section`
    margin: 3rem;
    grid-area: header;
    justify-self: end;
    text-align: center;
`

export const Title = styled.h1`
    font-family: "SFProDisplay", Helvetica, sans-serif;
    color:  ${props => props.theme.colors.coconoutMilk};
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 1.0rem 0;
    text-transform: none;
`

export const Subtitle = styled.h1`
    font-family: "Inconsolata", Helvetica, sans-serif;
    color:  ${props => props.theme.colors.coconoutMilk};
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 500;
    text-align: left;
    letter-spacing: -0.05em;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
`