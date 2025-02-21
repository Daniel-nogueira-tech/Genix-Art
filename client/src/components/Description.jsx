import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center
    my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm;text-4xl font-semibold mb-2'>Criar imagens IA</h1>
      <p className='text-gray-500 mb-8'>Transforme sua imaginação em imagens!</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_image_1} alt="" className='w-80 xl:w-96 rounded-lg' />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Apresentamos o gerador de texto para imagem com tecnologia Ai</h2>
          <p className='text-gray-600 mb-4'>Dê vida às suas ideias com facilidade usando nosso poderoso gerador
            de imagens AI gratuito! Seja para criar visuais impressionantes,
            ilustrações detalhadas ou imagens totalmente exclusivas, nossa
            ferramenta transforma sua imaginação em realidade em questão de
            segundos. Experimente agora e surpreenda-se com os resultados!</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description