import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 50vh;
    background-color: #F6A533;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin-bottom: 20px;
        color: #fff;
    }

    .inner{
        width: 100%;
        height: 79%;
        box-shadow: 1px 1px 5px #333;
        border-radius: 10px;
        background-color: #fff;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (min-width: 600px){
            width: 600px;
        }
    }
`