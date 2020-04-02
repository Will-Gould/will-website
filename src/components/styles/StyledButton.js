import styled from 'styled-components'

const StyledButton = styled.button`
    font-weight: 300;
    &.negative{
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0);
        color: #FD3131;
        border: 1px solid #FD3131;
        border-radius: 5px;
        padding: 10px;
        font-family: 'Raleway', sans-serif;
    }
    &.negative:hover{
        cursor: pointer;
        color: white;
        background-color: #FD3131;
    }
    &.positive{
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0);
        color: #31FD31;
        border: 1px solid #31FD31;
        border-radius: 5px;
        padding: 10px;
        font-family: 'Raleway', sans-serif;
    }
    &.positive:hover{
        cursor: pointer;
        color: white;
        background-color: #31FD31;
    }
`;

export default StyledButton;