import React from 'react'

import Intro from "../intro/Intro";
import Painting from '../painting/Painting';

import {Wrapper} from './style';

const Home = () => {
    return (
        <Wrapper>
            <Intro/>
            <Painting />
        </Wrapper>
    )
}

export default Home;