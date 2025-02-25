import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const Result = () => {
  const [image, setImage] = useState(assets.image_gerar)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const { generateImage, user } = useContext(AppContext) // Incluímos o 'user' do contexto

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    // Verificação: se o usuário não está autenticado, não prosseguir.
    if (!user || !user._id) {
      toast.error("Usuário não autenticado. Por favor, faça login.")
      return;
    }

    setLoading(true)

    if (input) {
      const generatedImage = await generateImage(input)
      if (generatedImage) {
        setIsImageLoaded(true)
        setImage(generatedImage)
      }
    }
    setLoading(false)
  }

  
  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler} 
      className='flex flex-col min-h-screen justify-center items-center bg-gradient-to-b text-black px-4'
    >
      <div>
        <div className='relative shadow-lg rounded-lg overflow-hidden'>
          <img src={image} alt="Imagem gerada" className='max-w-sm rounded-lg transition-transform duration-500 hover:scale-105' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 
            ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}
          />
        </div>
        {loading && <p>Gerando imagem...</p>}
      </div>

      {!isImageLoaded ? (
        <div className='flex w-full max-w-xl bg-gradient-to-r from-blue-200 to-purple-200 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Descreva o seu pensamento para gerar imagem'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'
          />
          <button
            type='submit'
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
          >
            Gerar
          </button>
        </div>
      ) : (
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p
            onClick={() => { setIsImageLoaded(false) }}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
          >
            Gerar outro
          </p>
          <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default Result
