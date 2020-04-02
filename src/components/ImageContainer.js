import React from "react"

import StyledImageContainer from './styles/StyledImageContainer'

class ImageContainer extends React.Component{

    constructor(props) {
        super(props)
        this.state = {isToggle: false};

    }
    
    toggleHover() {
        
        this.setState(state => ({
            isToggle: !state.isToggle
          }));
    }

    render(){
        var imgStyle;
        var headingStyle;
        if(this.state.isToggle){
            imgStyle = {border: '20px solid #A9F598', backgroundColor: '#A9F598'}
        }else{
            imgStyle = {border: '20px solid rgba(0, 0, 0, 0)'}
            headingStyle = {visibility: 'hidden'}
        }
        return (
        <StyledImageContainer style={imgStyle} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
            <img src={this.props.image} />

            {this.props.heading ? <h3 style={headingStyle} >{this.props.heading}</h3> : null}
        </StyledImageContainer>
        )
    }

}

export default ImageContainer;