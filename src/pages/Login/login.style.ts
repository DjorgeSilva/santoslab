import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #F6A533;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        margin-bottom: 25px;
    }

    h1{

    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        @media (min-width: 550px){
            width: 550px;
        }

        input{
            width: 100%;
            height: 45px;
            border-radius: 10px;
            border: none;
            padding-left: 15px;
            outline: none;
        }

        input[type=email]{
            margin-top: 30px;
        }

        input[type=password]{
            margin-top: 25px;
        }

        button{
            height: 45px;
            margin-top: 25px;
            border-radius: 10px;
            outline: none;
            border: none;
        }
    }
`