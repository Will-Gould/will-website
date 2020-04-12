import React from 'react'

import StyledConsole from './styles/StyledConsole'

class Console extends React.Component {

    help(){
        return(
            <ul>
                <li>help - displays commands</li>
                <li>hello 'name' - displays a greeting</li>
                <li>npm build - builds the project</li>
            </ul>
        );
    }

    render(){
        return(
            <StyledConsole>
                <div class="textWindow">
                <p>guest@will-website$</p>
                </div>
            </StyledConsole>
        )
    }

}

export default Console;