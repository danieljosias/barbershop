import styled from 'styled-components';

export const Container = styled.div`

  /*estilização do carousel de imagens*/
  .rec.rec-arrow {
    border-radius: 0px;
    margin: 10px;
    background: var(--blue);
  }

  .rec.rec-arrow:hover {
    border-radius: 50%;
    color: var(--white);
  }

  .rec.rec-dot_active{
    background-color: var(--black);
    box-shadow: 0 0 1px 3px var(--black);
    &:focus{
      box-shadow: 0 0 1px 3px var(--blue);
    }
    &:hover{
      color: var(--blue);
    }
  }

  .rec .rec-arrow .rec .rec-arrow-right:hover{
    color: var(--blue);
  }

  .rec.rec-dot{
    background-color: var(--blue);
    box-shadow: 0 0 1px 3px var(--black);
    
    &:focus{
      box-shadow: 0 0 1px 3px var(--blue);
    }
    &:hover{
      color: var(--blue);
    }
  }
  
  @media (max-width: 1440px){
    .rec.rec-arrow {
      display: none;
    }
    
    .nav{
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: var(--blue);
    }
    
    .nav__link{
      color: var(--white);
      font-size: 1.8em;
    }

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
    }
    
    .barbers{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
    }

    .products{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
    }
  }

  /*1360px*/
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--blue);
    padding: 1em;
  }
  
  .nav__link{
    color: var(--white);
    font-size: 1.8em;
  }

  .nav__title{
    color: var(--white);
    font-size: 2em;
  }

  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    font-size: 2em;
  }
  
  .barbers{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 1em;
  }

  .products{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 1em;
  }

  @media (max-width: 1024px){
    .rec.rec-arrow {
      display: none;
    }
    
    .nav{
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: var(--blue);
    }

    .nav__title{
      color: var(--white);
      font-size: 1.8em;
    }
    
    .nav__link{
      color: var(--white);
      font-size: 1.8em;
    }

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
      font-size: 2.2em;
    }
    
    .barbers{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 2.6em;
    }
    
    .products{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 2.6em;
    }
  }

  @media (max-width: 768px){
    .rec.rec-arrow {
      display: none;
    }
    
    .nav{
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: var(--blue);
      padding: 1em;
    }

    .nav__title{
      color: var(--white);
      font-size: 1.4em;
    }
    
    .nav__link{
      color: var(--white);
      font-size: 1.8em;
    }

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
      font-size: 1.8em;
    }
    
    .barbers{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1.8em;
    }
    
    .products{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1.8em;
    }
  }

  @media (max-width: 500px){
    .rec.rec-arrow {
      display: none;
    }
    
    .nav{
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: var(--blue);
    }
    
    .nav__title{
      color: var(--white);
      font-size: 1.2em;
    }

    .nav__link{
      color: var(--white);
    }

    .nav__item{
      font-size: .7em;
    } 

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
      font-size: 1.2em;
    }
    
    .barbers{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1.2em;
    }

    .products{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1.2em;
    }
  }

  @media (max-width: 425px){
    .rec.rec-arrow {
      display: none;
    }

    .nav{
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: var(--blue);
      padding: 1em;
    }

    .nav__title{
      color: var(--white);
      font-size: 1em;
    }
    
    .nav__link{
      color: var(--white);
    }

    .nav__item{
      font-size: .5em;
    }

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
      font-size: 1em;
    }
    
    .barbers{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1.2em;
    }

    .products{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1.2em;
    }
  }

  @media (max-width: 375px){
    .rec.rec-arrow {
      display: none;
    }

    .nav{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2em;
      background-color: var(--blue);
      padding: 1em;
    }

    .nav__title{
      color: var(--white);
      font-size: .8em;
    }
    
    .nav__link{
      color: var(--white);
    }

    .nav__item{
      font-size: .5em;
    }

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
      font-size: 1em;
    }
    
    .barbers{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1em;
    }

    .products{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1em;
    }
  }

  @media (max-width: 320px){
    .rec.rec-arrow {
      display: none;
    }

    .nav{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2em;
      background-color: var(--blue);
      padding: 1em;
    }

    .nav__title{
      color: var(--white);
      font-size: .8em;
    }
    
    .nav__link{
      color: var(--white);
    }

    .nav__item{
      font-size: .5em;
    }

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
      font-size: 1em;
    }
    
    .barbers{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1em;
    }

    .products{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin: 1em;
      font-size: 1em;
    }
  }
`;