import logo from '../assets/logo.png';
import { navLinks } from '../constants';
import Botton from './Botton';

const Navbar = () => {
  return (
    <div className="py-6">
      <div className="bg-primary flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center space-x-6">
          <ul className="flex ml-auto space-x-4 text-gray-600">
            <li className="text-base font-poppins font-medium cursor-pointer">Our Services</li>
            <li className="text-base font-poppins font-medium cursor-pointer">Why Us</li>
            <li className="text-base font-poppins font-medium cursor-pointer">Testimonial</li>
            <li className="text-base font-poppins font-medium cursor-pointer">FAQ</li>
          </ul>
          <Botton />
        </div>

      </div>

    </div>
  )
}

export default Navbar