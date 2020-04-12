import styled from 'styled-components'

const StyledConsole = styled.div`
    top: 300px;
    left: 31vw;
    z-index: 5;
    background-color: rgb(20,20,20);
    width: 30vw;
    position: absolute;
    border: 1px solid #C0C0C0;
    box-shadow: 1px 1px gray;
    font-family: 'Source Code Pro', monospace;
    font-size: 18px;
    color: rgb(72,251,7);
    padding: 0;
    margin: 0;

    .textWindow{
        height: 15vw;
    }
`;

export default StyledConsole;