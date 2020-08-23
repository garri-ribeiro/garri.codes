import React from 'react'

import { Content } from '@adobe/react-spectrum';

import { Title, SubTitle, CompanyLink } from './StyledComponents';

import { QUINTOANDAR_CARRER_URL } from '../Utils/constants';

export const LandingPageContent = () => {
    return (
        <Content marginTop="size-1700" marginStart="size-1700">
            <Title>
                Hello there, I'm Garri!
            </Title>
            <SubTitle>
                >_ Software Enginner <CompanyLink href={QUINTOANDAR_CARRER_URL} target="blank"s>@QuintoAndar</CompanyLink>
            </SubTitle>
        </Content>
    )
}

export default LandingPageContent
