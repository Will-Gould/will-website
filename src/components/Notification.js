import React from "react"

import StyledNotification from './styles/StyledNotification'

class Notification extends React.Component{

    constructor(props){
        super(props)

    }

    render(){

        return(
            <StyledNotification zvalue={this.props.zvalue}>
                <h4>Error</h4>
                <p>This is a bruh moment!</p>
            </StyledNotification>
        )
    }

}

export default Notification;