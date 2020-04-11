import React from "react"

import ImageContainer from './ImageContainer'
import Button from './Button'
import HelloWorldSlider from './HelloWorldSlider'

import StyledHero from './styles/StyledHero'
import StyledHeroSection from './styles/StyledHeroSection'

const image = {
    url: img,
    heading: 'Me in Berlin'
}

function Hero(){
    return(
        <StyledHeroSection>
            <HelloWorldSlider />
            <StyledHero>
                <h1>WILL GOUL</h1>
            </StyledHero>
            <Button />
        </StyledHeroSection>
    )
}

export default Hero;