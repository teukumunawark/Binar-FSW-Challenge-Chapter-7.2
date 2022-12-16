import React from 'react'
import car from '../assets/img_car.png'

const Hero = () => {
  return (
    <div className="lg:flex justify-between items-center pt-20">
      <div className='w-6/12 '>
        <div className="xl:ml-52 lg:ml-16 md:ml-5 xl:mr-20 mr-0">
          <h2 className="xl:text-4xl md:text-2xl font-poppins font-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
          <p className="pt-4 font-poppins">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </div>
      </div>

      <div className="w-5/12">
        <img src={car} alt="car" />
      </div>
    </div>
  )
}

export default Hero