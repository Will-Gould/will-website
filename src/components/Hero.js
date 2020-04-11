import React from "react"

import ImageContainer from './ImageContainer'
import Button from './Button'
import HelloWorldSlider from './HelloWorldSlider'

import StyledHero from './styles/StyledHero'
import StyledHeroSection from './styles/StyledHeroSection'

import img from './styles/img/IMG_3076.jpg'

const image = {
    url: img,
    heading: 'Me in Berlin'
}

function Hero(){
    return(
        <StyledHeroSection>
            <HelloWorldSlider />
            <StyledHero>
                <h1>WILL GOULD</h1>
            </StyledHero>
            <ImageContainer image={img} heading={image.heading} />
            <Button />
        </StyledHeroSection>
    )
}

export default Hero;