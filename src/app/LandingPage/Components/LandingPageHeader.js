import React from 'react'

import {
    Flex,
    Header,
    ActionButton,
} from '@adobe/react-spectrum';

import ShowMenu from '@spectrum-icons/workflow/ShowMenu';


export const LandingPageHeader = ({ gridArea }) => {
    const WIP = process.env.NODE_ENV === 'development';

    return (
        <Header gridArea={gridArea}>
        { WIP &&
            <Flex direction="column" alignItems="flex-end">
                <ActionButton isQuiet marginEnd="size-300" marginTop="size-300">
                    <ShowMenu size="M" />
                </ActionButton>
            </Flex>
        }
        </Header>
    )
}

export default LandingPageHeader
