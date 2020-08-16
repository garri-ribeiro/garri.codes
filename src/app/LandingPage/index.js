import React from 'react'
import {
    Grid,
    View
} from '@adobe/react-spectrum';

import {LandingPageHeader as Header} from './LandingPageHeader'
import {LandingPageContent as Content} from './LandingPageContent';

const LandingPage = () => {
    return (
        <Grid
            areas={['bordertop bordertop','border  header', 'border content', 'border2  footer']}
            rows={['size-100','size-1000','auto','size-1000']}
            columns={['size-1000','auto']}
            height="100vh"
        >
            <View borderRightWidth="thin" borderColor="dark" gridArea="border" />
            <View 
                borderRightWidth="thin" 
                borderTopWidth="thin" 
                borderColor="dark" 
                gridArea="border2" 
            />

            <View backgroundColor="blue-600" gridArea="bordertop" />
            <Header gridArea="header" />
            <Content gridArea="content" />
            <View borderTopWidth="thin" borderColor="dark" gridArea="footer" />
        </Grid>
    )
}

export default LandingPage;
