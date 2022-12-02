import React from 'react'
import { Container } from './styles'
import Logotipo from '../../assets/barbershop.png'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import Item from '../../carousel/index'
import { breakPoints } from '../../carousel/settings'
import { items } from '../../carousel/items'
import CardBarber from '../CardBarber'
import { barbers } from './barbers'
import CardProduct from '../CardProduct';
import { products } from './products'

function Home() {

  return (
    <Container>
        <nav className='nav'>
            <h2 className='nav__title'>Barbershop</h2>
            <li className='nav__item'><Link className='nav__link' to="">Barber</Link></li>
            <li className='nav__item'><Link className='nav__link' to="">Client</Link></li>
            <li className='nav__item'><Link className='nav__link' to="/signin">Logout</Link></li>
        </nav>

        <section className='carousel'>
            <Carousel breakPoints={breakPoints}>
                {items.map(item => <Item key={item.id} img={item.img}/>)}
            </Carousel>
        </section>

        <div className='title'>
            <h2>Barbeiros</h2>
        </div>
        <section className='barbers'>
            {barbers.map(barber =>{
                return <CardBarber key={barber.id} name={barber.name} img={barber.img}/>
            })}
        </section>

        <div className='title'>
            <h2>Produtos</h2>
        </div>
        <section className='products'>
            {products.map(product =>{
                return <CardProduct key={product.id} name={product.name} img={product.img}/>
            })}
        </section>
    </Container>
  )
}

export default Home
