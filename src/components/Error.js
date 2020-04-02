import React from "react"

import StyledError from './styles/StyledError'

import Notification from './Notification'
import {InvertedPopupButton} from './styles/StyledPopupButton'

class Error extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
    
        return(
            <StyledError>
                <Notification zvalue="1" />
                <Notification zvalue="2" />
                <Notification zvalue="3" />
                <Notification zvalue="4" />
            </StyledError>
        )
    }

}

export default Error;