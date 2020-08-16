import React from 'react'
import {
    Grid,
    View,
    repeat
} from '@adobe/react-spectrum';

const LandingPage = () => {
    return (
    <Grid
    areas={['header  header', 'content content', 'footer  footer']}
    rows={repeat(3, '1fr')}
    height="100vh">
        <View backgroundColor="celery-600" gridArea="header" />
        <View backgroundColor="purple-600" gridArea="content" />
        <View backgroundColor="magenta-600" gridArea="footer" />
    </Grid>
    )
}

export default LandingPage
