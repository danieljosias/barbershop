import styled from 'styled-components';

export const Container = styled.div`

    @media (max-width: 1440px){
        display: flex;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        border: 1px solid;
        
        .left{
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center ;
            width: 100%;
            
            img{
                width: 50%;
                height: 50%;
            }
        }
        
        .right{
            width: 100%;

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 70%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                    width: 80%;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 80%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
        }   }
    }

    /*responsividade para a tela de 1360px*/
        display: flex;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        border: 1px solid;
        
        .left{
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center ;
            width: 100%;
            
            img{
                width: 50%;
                height: 50%;
            }
        }
        
        .right{
            width: 100%;

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center ;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 70%;
                min-height: 40%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                    padding: .1em;
                    width: 80%;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 80%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
            }

        }

    @media (max-width: 1024px){
        display: flex;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        border: 1px solid;
        
        .left{
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center ;
            width: 100%;
            
            img{
                width: 80%;
                height: 80%;
            }
        }
        
        .right{
            width: 100%;

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 80%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                    width: 85%;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 85%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
            }

        }
    }

    @media (max-width: 768px){
        display: flex;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        border: 1px solid;
        
        .left{
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center ;
            width: 100%;
            
            img{
                width: 80%;
                height: 80%;
            }
        }
        
        .right{
            width: 100%;

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 80%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                    width: 85%;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 85%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
            }

        }
    }

    @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        
        .left{
            display: none;
        }
        
        .right{

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 80%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                    width: 85%;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 85%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
            }

        }

    }

    @media (max-width: 425px){
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        
        .left{
            display: none;
        }
        
        .right{

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 80%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                    width: 85%;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 85%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
            }

        }
    }

    @media (max-width: 375px){
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        
        .left{
            display: none;
        }
        
        .right{

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 80%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 85%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
            }

        }
    }

    @media (max-width: 320px){
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        
        .left{
            display: none;
        }
        
        .right{

            h2{
                margin-bottom: .8em;
            }
     
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            height: 100%;
            
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 1em;
                background-color: var(--blue);
                padding: 1em;
                width: 80%;
                
                input{
                    border-radius: 0em .4em;
                    font-size: 1em;
                    margin: .5em;
                }
                
                button{
                    border-radius: 0em .4em;
                    width: 85%;
                    font-size: 1em;
                    padding: .1em;
                    margin: .5em;
                }
            }

        }
    }
`;