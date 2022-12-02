import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles'
import Babershop from '../../assets/barbershop.png'

export default function Welcome() {
  const history = useHistory()

  return (
    <Container>
        <div className='top'>
          <img src={Babershop} alt="logotipo da barbearia" />
        </div>
        <div className='down'>
          <div className='wrapper'> 
            <h2>Olá, seja muito bem vindo !!!</h2>
            <p>Aqui você pode agendar o seu corte, escolher o barbeiro e evitar gastar tempo na fila de espera... Que tal?</p>
            <button><Link to="/signup">Cadastre-se</Link></button>
          </div>
        </div>
    </Container>
  )
}
