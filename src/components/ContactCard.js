import React from "react"
import styled from 'styled-components'


function ContactCard(props){
    return(
        <div className="contact-card">
            <h3>{props.contact.title}</h3>
            <p>Ph: 0404040404</p>
            <p>Email: bruh@bruhworld.com</p>
        </div>
    )
}

export default ContactCard;