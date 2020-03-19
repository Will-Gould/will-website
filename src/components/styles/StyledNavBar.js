import styled from 'styled-components'

const StyledNavBar = styled.nav`
    color: #4AE1FF;
    background-color: #0e1111;
    width: 4vw;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    a{
        width: 100%;
        font-size: 2vw;
        min-font-size: 25px;
        transition: color 0.6s;
        transition: font-size 0.6s;
    }
    a:hover{

        font-size: 2.4vw;
    }
    svg{
        padding: 1vw;
        transition: padding 0.6s;
    }
    svg:hover{
        padding: 0.8vw;
    }
`

export default StyledNavBar;