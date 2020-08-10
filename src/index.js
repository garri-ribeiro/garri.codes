import React from "react";
import { render } from "react-dom";

import {
    Provider,
    defaultTheme,
    Button
} from '@adobe/react-spectrum';

const App = () =>  (
    <Provider theme={defaultTheme} colorScheme="light">
        Eu ia lhe chamar, enquanto corria a barca.
    </Provider>
);

render(<App />, document.getElementById('app'));
