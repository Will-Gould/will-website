import React from "react"

import Error from './Error'

import StyledSection from './styles/StyledSection'

import gif from './styles/img/doot.gif'

class Section extends React.Component{

    constructor(props){
        super(props)

    }

    render(){

        return(
            <StyledSection>
                {this.props.heading ? <h1>{this.props.heading}</h1> : null}
                {this.props.error ? <Error /> : null}
                {this.props.coolContent ? 
                <div class="cool">
                    <p>
                    A long ass paragraph about something random. I ond't know what it is going to be but I definately know it will not be long enough and will contain 
                    spelling errors due the rapid pace at which I am typing right now. I don't have enough brain power to come up with anything even mildly interesting 
                    so this is all you are going to get.
                    </p>
                    <br/>
                    <p>
                    Furthermore, it is apparent that I have absolutely zero regard for design conventions. Some would see this as a threat to order and a definate cause 
                    for users to abandon a platform. To those people I say good riddance, because they obviously have no appreciation for art and if all they care about 
                    is "minimalist design" then they are robots that smell like soap (and are probably communists).
                    </p>
                    <br/>
                    <p>
                    If you are still reading this, it means this has been a poor demonstration in readability and no matter how much text I put on this page every user 
                    will read all of it, but allow me to break character for a second. This text is only a background I am using to fill out the "cool zone" just to make everything look a bit
                    "busier". It is all nothing but meaningless dribble, and you should probably ignore all of it. If you decide to, you can read on... But I warn you, I am bad at spelling
                    and the IDE that i'm using does not check it.
                    </p>
                    <img src={gif} gif="true" />
                </div> 
                : null}
            </StyledSection>
        )
    }

}

export default Section;