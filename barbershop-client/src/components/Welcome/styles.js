import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 1440px){
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    
    .top{
        height: 100%;
        width: 100%;
    
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 30vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: 1.9em;
            text-align: justify;
        }
        
        p{
            color: var(--white);
            font-size: 1.9em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .5em;
            border-radius: 1em;
            font-size: 1.6em;
            font-weight: bold;
        }
        }
    }

    /* responsividade para tela de 1360px */
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100%;
    
    .top{
        height: 50%;
        width: 100%;
    
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 20vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: 1.2em;
            text-align: justify;
        }
        
        p{
            color: var(--white);
            font-size: 1.2em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .4em;
            border-radius: 1em;
            font-size: 1.2em;
            font-weight: bold;
        }
    }
    

    @media (max-width: 1024px){
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    
    .top{
        height: 100%;
        width: 100%;
    
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 40vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: 1.8em;
            text-align: justify;
        }
        
        p{
            color: var(--white);
            font-size: 1.8em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .5em;
            border-radius: 1em;
            font-size: 1.5em;
            font-weight: bold;
        }
        }
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    
    .top{
        height: 100%;
        width: 100%;
    
        img{
            max-width: 70%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 50vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: 1.7em;
            text-align: justify;
        }
        
        p{
            color: var(--white);
            font-size: 1.7em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .5em;
            border-radius: 1em;
            font-size: 1.6em;
            font-weight: bold;
        }
    }
    }

    @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    
    .top{
        height: 100%;
        width: 100%;
    
        img{
            max-width: 70%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 60vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: 1.1em;
            text-align: justify;
        }
        
        p{
            color: var(--white);
            font-size: 1em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .4em;
            border-radius: 1em;
            font-size: 1em;
            font-weight: bold;
        }
    }
    }

    @media (max-width: 425px){
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    
    .top{
        height: 100%;
        width: 100%;
    
        img{
            max-width: 70%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 60vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: 1.1em;
            text-align: justify;
        }
        
        p{
            color: var(--white);
            font-size: 1em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .4em;
            border-radius: 1em;
            font-size: 1em;
            font-weight: bold;
        }
    }
    }

    @media (max-width: 375px){
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    
    .top{
        height: 100%;
        width: 100%;
    
        img{
            max-width: 70%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 60vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: 1em;
        }
        
        p{
            color: var(--white);
            font-size: 1em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .4em;
            border-radius: 1em;
            font-size: 1em;
            font-weight: bold;
        }
    }
    }

    @media (max-width: 320px){
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    
    .top{
        height: 100%;
        width: 100%;
    
        img{
            max-width: 70%;
            max-height: 100%;
        }
    }
    
    .down{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
    .wrapper{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        max-width: 60vw;
        height: 50%;
        
        h2{
            color: var(--white);
            font-size: .86em;
        }
        
        p{
            color: var(--white);
            font-size: .82em;
            text-align: justify;
        }
        
        button{
            background-color: var(--white);
            padding: .3em;
            border-radius: 1em;
            font-size: .86em;
            font-weight: bold;
        }
    }
    }
`;