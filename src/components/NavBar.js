import React from "react"
import StyledNavBar from './styles/StyledNavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function NavBar(){
    return(
        <StyledNavBar>
            <a href="https://github.com/Will-Gould">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/william-gould-543bb4185/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </StyledNavBar>
    )
}

export default NavBar;