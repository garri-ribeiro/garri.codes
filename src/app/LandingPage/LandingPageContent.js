import React from 'react'
import styled from 'styled-components'


import {
    Content,
    Heading,
} from '@adobe/react-spectrum';

const Title = styled.h1`
    font-size: 7em;
`;

const SubTitle = styled.h1 `
    font-size: 3em;
`;


export const LandingPageContent = () => {
    return (
        <Content>
            <Title level={1}>
                Hello there, I'm Garri!
            </Title>
            <SubTitle level={2}>
                >_ Software Enginner @QuintoAndar
            </SubTitle>
        </Content>
    )
}

export default LandingPageContent
