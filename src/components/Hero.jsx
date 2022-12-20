import React from 'react'
import Image from '../assets/img_car.png'
import Search from '../components/Form';


const Hero = () => {
  return (
    <section className='h-full max-h-[500px] mb-8 xl:mb-24'>
      <div className='flex flex-col sm:flex-row bg-primary lg:pt-28 pt-36 justify-between'>
        <div className='lg:ml-20 xl:ml-72 flex flex-col items-center lg:text-left justify-center space-y-5 flex-1 px-4 lg:px-0 max-w-xl'>
          <h1 className='font-poppins font-bold text-3xl md:text-4xl'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p className='font-poppins'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </div>
        <div className='pt-10'>
          <img src={Image} alt="" className='xl:max-w-3xl md:max-w-xl sm:max-w-md' />
        </div>
      </div>
      <Search />
    </section>

  )
}

export default Hero