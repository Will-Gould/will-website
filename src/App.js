import React from "react"
import GlobalStyle from './components/styles/GlobalStyle'
import StyledMain from './components/styles/StyledMain'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'
import ContactCard from "./components/ContactCard"


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            answer: "yes"
        }
    }

    bruhMethod(){

    }

    render() {
        return (
            <StyledMain>
                <GlobalStyle />
                <NavBar />
                <Hero />
                <Section heading="Cool Zone" error="true" />
                <Section coolContent="true" />
            </StyledMain>
        )
    }
}

export default App