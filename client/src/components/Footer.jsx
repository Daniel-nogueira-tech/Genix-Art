import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 py-3 mt-20'>

            <img src={assets.logo} alt="" width={150} className='rounded-xl' />

            <p className='flex-1 border-1 border-gray-400 text-sm text-gray-500'>
                &copy; 2025 Genix art. Todos os direitos reservados.
            </p>

            <div className='flex gap-2.5'>
                <img src={assets.facebook} alt="" width={35} />
                <img src={assets.instagram} alt="" width={35} />
                <img src={assets.youtube} alt="" width={35} />
            </div>
        </div>
    )
}

export default Footer
