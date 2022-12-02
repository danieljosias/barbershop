import styled from 'styled-components';

export const Container = styled.div`
    .card{
        border: 1px solid;
        width: 100%;
        height: 100%;
    }
    
    .card__inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .card__img{
        width: 80%;
    }

    .card__name{
        font-size: 2em;
    }

    @media (max-width: 1024px){
        .card__name{
            font-size: 1em;
        }
    } 

    @media (max-width: 768px){
        .card__name{
            font-size: .8em;
        }
    }

    @media (max-width: 500px){
        .card__name{
            font-size: .8em;
        }
    }   

    @media (max-width: 425px){
        .card__name{
            font-size: 1em;
        }
    }   

    @media (max-width: 375px){
        .card__name{
            font-size: 1em;
        }
    } 

    @media (max-width: 320px){
        .card__name{
            font-size: 1em;
        }
    }   
`;

