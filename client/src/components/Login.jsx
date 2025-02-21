import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const Login = () => {
  const [state, setState] = useState('Entrar')

  const { setShowLogin } = useContext(AppContext)

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';

    }
  }, [])

  return (
    <div className='fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative bg-white p-10 rounded-xl text-slate-500 shadow-lg w-96'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium mb-2'>{state}</h1>
        <p className='text-sm mb-4'>Bem-vindo, faça login para continuar</p>

        {state !== 'Entrar' &&
          <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-3'>
            <img src={assets.person} alt="" className='w-5 h-5' />
            <input type="text" className='outline-none text-sm flex-1' placeholder='Nome completo' required />
          </div>
        }

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-3'>
          <img src={assets.email} alt="" className='w-5 h-5' />
          <input type="email" className='outline-none text-sm flex-1' placeholder='Email' required />
        </div>



        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-3'>
          <img src={assets.lock_icon} alt="" className='w-5 h-5' />
          <input type="password" className='outline-none text-sm flex-1' placeholder='Senha' required />
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Esqueceu sua senha?</p>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>
          {state === 'Entrar' ? 'Entrar' : 'Criar uma conta'}
        </button>

        {state === 'Entrar' ? <p className='mt-5 text-center'>
          Não tem uma conta?{' '}
          <span className='text-blue-600 cursor-pointer' onClick={() => setState('Inscrever-se')}>
            Inscrever-se
          </span>
        </p>
          :
          <p className='mt-5 text-center'>
            Já tem uma conta?{' '}
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('Entrar')}>
              Entrar
            </span>
          </p>}

        <img onClick={() => setShowLogin(false)} src={assets.close} alt=""
          className='absolute top-5 right-5 cursor-pointer' />

      </motion.form>
    </div>
  )
}

export default Login
