import styled from 'styled-components'

const StyledSection = styled.section`
    width: 100%;
    background-color: #FF4A87;
    color: #0e1111;
    font-size: 35px;
    font-family: 'Raleway', sans-serif;
    display: inline-block;
    h1{
        text-align: center;
        font-family: 'Megrim', cursive;
        font-size: 100px;
        font-weight: 200;
    }
    p{
        padding: 10px;
        font-weight: 200;
    }

    img{
        z-index: 5;
        right: 40px;
        top: 300px;
        position: absolute;
        float: right;
    }
    .cool{
        position: relative;
    }

`;

export default StyledSection;