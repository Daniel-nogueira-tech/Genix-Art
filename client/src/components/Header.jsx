import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Header = () => {


    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }
    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-20'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
        >

            <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p>Melhor gerador de texto para imagem</p>
                <img src={assets.cards_star} alt="" />
            </motion.div>

            <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl 
                sm:max-w-[590px] mx-auto mt-10 text-center'>Transforme texto em <span className='text-blue-600'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 2 }}

                > imagem </span> em segundos
            </motion.h1>

            <motion.p className='text-center max-w-xl mx-auto mt-5'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >Crie arte visual impressionante
                em segundos com o poder da IA. Basta digitar sua ideia e ver a magia acontecer!
            </motion.p>

            <motion.button onClick={onClickHandler} className="mt-14 inline-flex items-center gap-2 px-12 py-3
                  rounded-full bg-black text-white hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
            >
                Gerar Imagens
                <img src={assets.stars} alt="Ícone de estrela" className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-wrap justify-center mt-16 gap-3">
                {Array(6).fill('').map((_, index) => (
                    <motion.img
                        whileHover={{ scale: 1.05, duration: 0.1 }}
                        className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
                        src={[assets.sample_image_1, assets.sample_image_2, assets.sample_image_3, assets.sample_image_4][index % 4]}
                        alt=""
                        key={index}
                        width={70}
                    />
                ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className='mt-2 text-neutral-600'>Imagem gerada pela da Genix art.</motion.p>

        </motion.div>
    )
}

export default Header
