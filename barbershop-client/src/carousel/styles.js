import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   color: var(--white);
   margin: 0 1em;
   display: flex ;
   justify-content: center ;
   align-items: center;

   img{
      width: 50%;
   }

   @media (max-width: 1024px){
      img{
         width: 100%;
      }
   }
   
   @media (max-width: 768px){
      img{
         width: 100%;
      }
   }
   
   @media (max-width: 500px){
      img{
         width: 100%;
      }
   }
   
   @media (max-width: 425px){
      img{
         width: 100%;
      }
   }
   
   @media (max-width: 375px){
      img{
         width: 100%;
      }
   }
   
   @media (max-width: 320px){
      img{
         width: 100%;
      }
   }
`;