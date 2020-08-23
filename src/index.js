import React from "react";
import { render } from "react-dom";
import 'normalize.css';

import {
    Provider,
    defaultTheme
} from '@adobe/react-spectrum';

import LandingPage from './app/LandingPage';

const App = () =>  (
    <Provider theme={defaultTheme} colorScheme="light">
        <LandingPage />
    </Provider>
);

render(<App />, document.getElementById('app'));
