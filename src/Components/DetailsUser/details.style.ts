import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
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
        margin: 20px auto;
        color: #fff;
    }

    .inner{
        width: 100%;
        height: fit-content;
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

        .user-column{
            width: 100%;
            padding: 15px;

            p{
                width: 100%;
                height: fit-content;
                line-height: 8px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }


    .user-column-more-info{
            width: 100%;
            height: fit-content;
            margin: 0 auto;
            margin-bottom: 50px;

            @media (min-width: 600px){
                width: 600px;
            }

            .row{
    
                height: fit-content;

                .wrapper-column{

                    height: fit-content;

                    .wrapper{
    
                        height: fit-content;
                        margin-top: 30px;
                        box-shadow: 1px 1px 5px #333;
                        border-radius: 10px;
                        background-color: #fff;
                        padding: 10px;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        button{
                            padding: 5px 15px;
                            border: none;
                            background: #EFA032;
                            color: #fff;
                            border-radius: 10px;

                            &:hover{
                               background-color : #000;
                            }
                        }
                        p{
                            margin-bottom: 5px;
                        }

                        .icone{
                           padding-bottom: 2px;
                           margin-bottom: 3px;
                        }
                
                    }

                }
            }
                
                
`