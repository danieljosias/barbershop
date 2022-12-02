import React from 'react'
import { Container } from './styles'
import Logotipo from '../../assets/barbershop.png'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useHistory } from 'react-router-dom'
import InputError from '../InputError'

export default function SignIn() {
    const formSchema = yup.object().shape({
        username: yup.string().required("Username obrigatório").email("E-mail inválido"),
        email: yup.string().email().required("Email obrigatório"),
        password: yup.string().min(8).required("Senha obrigatório")
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(formSchema)
    });
    
    const onSubmitFunction = (data) => {
        console.log(data);
    }

  return (
    <Container>
        <div className='left'>
            <img src={Logotipo} alt="logotipo da barbearia" />
        </div>

        <div className='right'>
            <h2>SignIn</h2>

            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <input placeholder="Digite seu username" {...register("username")} />
                {errors.username?.type && <InputError type={errors.username.type} field="username"/>}

                <input placeholder="Digite seu email" {...register("email")} />
                {errors.email?.type && <InputError type={errors.email.type} field="email"/>}

                <input placeholder="Digite sua senha" {...register("password")} />
                {errors.password?.type && <InputError type={errors.password.type} field="password"/>}

                <button type="submit"><Link to="/home">Entrar</Link></button> 
            </form>
        </div>
    </Container>
  )
}
