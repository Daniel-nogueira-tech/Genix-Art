import logo from './logo.png'
import credit_star from './credit_star.svg'
import user from './user.svg'
import cards_star from './cards_star.svg'
import stars from './stars.png'
import sample_image_1 from './sample_image_1.png'
import sample_image_2 from './sample_image_2.png'
import sample_image_3 from './sample_image_3.png'
import sample_image_4 from './sample_image_4.png'
import eyes from './eyes.png'
import magic from './magic.png'
import download from './download.svg'
import  profile_img_1 from './profile/ profile_img_1.png'
import  profile_img_2 from './profile/ profile_img_2.png'
import  profile_img_3 from './profile/ profile_img_3.png'
import rating_starts from './rating_starts.svg'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import youtube from './youtube.svg'
import lock_icon from './lock_icon.svg'
import email from './email.svg'
import person from './person.svg'
import close from './close.svg'
import image_gerar from './image_gerar.png'

export const assets = {
    logo,
    credit_star,
    user,
    cards_star,
    stars,
    sample_image_1,
    sample_image_2,
    sample_image_3,
    sample_image_4,
    rating_starts,
    facebook,
    instagram,
    youtube,
    lock_icon,
    email,
    person,
    close,
    image_gerar,
    
}

export const stepsData = [
    {
        title: 'Descreva sua visão',
        description: 'Digite uma frase, sentença ou parágrafo que descreva a imagem que você deseja criar.',
        icon:eyes,
    },
    {
        title: 'Assista a mágica',
        description: 'Nosso mecanismo com tecnologia de IA transformará seu texto em uma imagem única e de alta qualidade em segundos',
        icon:magic,
    },
    {
        title: 'Baixar e compartilhar',
        description: 'Baixe sua criação instantaneamente ou compartilhe-a com o mundo diretamente da nossa plataforma.',  
        icon:download,
    },
];

export const testimonialsData = [
    {
        image: profile_img_1,
        name: 'Donald',
        role: 'graphic Designer',
        stars: '5',
        text: 'Uso o Genix Art há quase dois anos, principalmente para o Instagram, e ele tem sido incrivelmente fácil de usar, facilitando muito meu trabalho'
    },
    {
        image: profile_img_2,
        name: 'Amanda nelson',
        role: 'Social media',
        stars: '5',
        text: 'Uso o Genix Art há quase dois anos, principalmente para o Instagram, e ele tem sido incrivelmente fácil de usar, facilitando muito meu trabalho'
    },
    {
        image: profile_img_3,
        name: 'jennifer',
        role: 'graphic Designer',
        stars: '5',
        text: 'Uso o Genix Art há quase dois anos, principalmente para o Instagram, e ele tem sido incrivelmente fácil de usar, facilitando muito meu trabalho'
    }
]

export const plans = [
    {
        id: 'Básico',
        price: '10',
        credits: '100',
        desc: 'Melhor para uso pessoal.'
    },
    {
        id: 'advanced',
        price: '50',
        credits: '500',
        desc: 'Melhor para uso comercial.'
    },
    {
        id: 'Business',
        price: '250',
        credits: '5000',
        desc: 'Melhor para uso empresarial.'
    },
]