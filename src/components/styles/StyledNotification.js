import styled from 'styled-components'

const StyledNotification = styled.div`
    display: ${props =>props.display};
    position: absolute;
    border: 1px solid #C0C0C0;
    box-shadow: 1px 1px;
    background-color: #C0C0C0;
    width: 30vw;
    z-index: ${props =>props.zvalue};
    left: ${props =>props.zvalue*15}px;
    top: ${props =>props.zvalue*15}px;
    h4{
        color white;
        background-color: blue;
        font-size: 20px;
        text-align: left;
    }
    p{
        padding: 20px;
    }
`

export default StyledNotification;