import styled from 'styled-components'

const StyledHelloWorldSlider = styled.div`
    color: #FFFFFF;
    width:100%;
    height:50px;
    line-height:50px;
    overflow:hidden;
    position:relative;
    background-color: #0e1111;

    @keyframes slide {
        from { left: 100%;}
        to { left: -100%;}
      }
    

    p {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:120px;
        font-size:30px;
        animation-name: slide;
        animation-duration: 10s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-name: slide;
        -webkit-animation-duration: 10s;
        -webkit-animation-timing-function:linear;
        -webkit-animation-iteration-count: infinite;
      }

`

export default StyledHelloWorldSlider;