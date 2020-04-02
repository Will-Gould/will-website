import styled from 'styled-components'

const StyledPopupButton = styled.button`
    margin-top 15%;
    margin-right: 40%;
    font-size: 30px;
    background-color: #4AE1FF;
    color: #FF4A87;
    border: 1px solid #FF4A87;
    border-radius: 5px;
    padding: 20px;
    font-family: 'Raleway', sans-serif;
    
    &:hover{
        cursor: pointer;
        color: #4AE1FF;
        background-color: #FF4A87;
    }
`;

const InvertedPopupButton = styled.button`
    float: left;
    font-size: 30px;
    background-color: #FF4A87;
    color: #4AE1FF;
    border: 1px solid #4AE1FF;
    border-radius: 5px;
    padding: 20px;
    font-family: 'Raleway', sans-serif;

    &:hover{
        cursor: pointer;
        color: #FF4A87;
        background-color: #4AE1FF;
    }
`;

export {StyledPopupButton, InvertedPopupButton};