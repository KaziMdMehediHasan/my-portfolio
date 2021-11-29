import React from 'react';
import logo from '../../images/logo.png';
import "../../index.css";
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Social from '../Social/Social';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    return (
        <>
        <TopSection></TopSection>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Social></Social>
        </>
    );
};

export default Home;