import React from 'react'

import {
    Flex,
    Header,
    ActionButton,
} from '@adobe/react-spectrum';

import ShowMenu from '@spectrum-icons/workflow/ShowMenu';


export const LandingPageHeader = ({ gridArea }) => {
    return (
        <Header gridArea={gridArea}>
            <Flex direction="column" alignItems="flex-end">
                <ActionButton isQuiet marginEnd="size-300" marginTop="size-300">
                    <ShowMenu size="M" />
                </ActionButton>
            </Flex>
        </Header>
    )
}

export default LandingPageHeader
