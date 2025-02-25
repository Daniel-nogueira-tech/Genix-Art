import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Entrar')
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (state === 'Entrar') {
        const { data } = await axios.post(
          `${backendUrl}/api/user/login`,
          { email, password }
        )

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          // Salva o timestamp atual (em milissegundos)
          localStorage.setItem('loginTimestamp', Date.now().toString());
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
        
      } else {
        const { data } = await axios.post(
          `${backendUrl}/api/user/register`,
          { name, email, password }
        )

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      // Mostra uma mensagem de erro mais detalhada, se disponível
      toast.error(
        error.response?.data?.message || error.message || 'Erro na requisição'
      )
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative bg-white p-10 rounded-xl text-slate-500 shadow-lg w-96'
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium mb-2'>
          {state}
        </h1>
        <p className='text-sm mb-4'>Bem-vindo, faça login para continuar</p>

        {state !== 'Entrar' && (
          <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-3'>
            <img src={assets.person} alt='Ícone pessoa' className='w-5 h-5' />
            <input
              type='text'
              className='outline-none text-sm flex-1'
              placeholder='Nome completo'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-3'>
          <img src={assets.email} alt='Ícone email' className='w-5 h-5' />
          <input
            type='email'
            className='outline-none text-sm flex-1'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-3'>
          <img src={assets.lock_icon} alt='Ícone de bloqueio' className='w-5 h-5' />
          <input
            type='password'
            className='outline-none text-sm flex-1'
            placeholder='Senha'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>
          Esqueceu sua senha?
        </p>

        <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full'>
          {state === 'Entrar' ? 'Entrar' : 'Criar uma conta'}
        </button>

        {state === 'Entrar' ? (
          <p className='mt-5 text-center'>
            Não tem uma conta?{' '}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => setState('Inscrever-se')}
            >
              Inscrever-se
            </span>
          </p>
        ) : (
          <p className='mt-5 text-center'>
            Já tem uma conta?{' '}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => setState('Entrar')}
            >
              Entrar
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.close}
          alt='Fechar'
          className='absolute top-5 right-5 cursor-pointer'
        />
      </motion.form>
    </div>
  )
}

export default Login
