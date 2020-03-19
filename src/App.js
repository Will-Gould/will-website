import React from "react"
import GlobalStyle from './components/styles/GlobalStyle'

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
            <div>
                <GlobalStyle />
                <NavBar />
                <Hero />
                <Section />
            </div>
        )
    }
}

export default App