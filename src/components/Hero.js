import React from "react"

import ImageContainer from './ImageContainer'
import Button from './Button'

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
            <StyledHero>
                <h1>WILL GOULD</h1>
                <h2>HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO</h2>
            </StyledHero>
            <ImageContainer image={img} heading={image.heading} />
            <Button />
        </StyledHeroSection>
    )
}

export default Hero;