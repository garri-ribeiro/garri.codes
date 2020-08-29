import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 8em;
    margin: 0;

    @media(max-width: 1400px) {
        font-size: 6em;
    }

    @media(max-width: 700px) {
        font-size: 4em;
    }
`;

export const SubTitle = styled.h1`
    font-size: 2em;
    margin: 0;

    @media(max-width: 1400px) {
        font-size: 1.8em;
    }

    @media(max-width: 700px) {
        font-size: 1.2em;
    }
`;

export const CompanyLink = styled.a`
    color: inherit;
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: #1F3BDF;
        width: 0%;
        display: block;
        transition: width .5s ease-in-out;
    }
    &:hover {
        background: rgb(31,59,223);
        background: linear-gradient(183deg, rgba(31,59,223,1) 43%, rgba(80,99,240,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:after {
            width: 100%;
        }
    }
`