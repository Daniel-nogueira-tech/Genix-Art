import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            className='flex flex-col items-center justify-center my-20 py-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
                Depoimentos de usuários
            </h1>
            <p className='text-gray-500 mb-12'>
                O que nossos usuários estão dizendo
            </p>

            <div className='flex flex-wrap gap-6 justify-center'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index}
                        className='bg-white/20 p-12 rounded-lg shadow-md w-80 m-auto
                cursor-pointer hover:scale-[1.02] transition-all'
                    >
                        <div className='flex flex-col items-center'>
                            <img src={testimonial.image} alt=""
                                className='rounded-full w-14 h-14 object-cover' />
                            <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                            <p className='text-gray-500 mb-4'>{testimonial.role}</p>

                            {/* Renderizando estrelas */}
                            <div className="flex mb-4">
                                {Array.from({ length: testimonial.stars }, (_, index) => (
                                    <img key={index} src={assets.rating_starts} alt="Estrela" className="w-5 h-5" />
                                ))}
                            </div>

                            <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

    )
}


export default Testimonials
