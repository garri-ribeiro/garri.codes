import React from 'react'
import { Wrapper } from './style';
import  Intro from "../intro/Intro";
import Painting from '../painting/Painting';
const Home = () => {
    return (
        <Wrapper>
            <Intro/>
            <Painting />
        </Wrapper>
    )
}

export default Home;