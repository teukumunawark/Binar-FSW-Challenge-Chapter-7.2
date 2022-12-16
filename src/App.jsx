import style from './style';
import { Navbar, Hero, Footer } from './components';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary`}>
          <Hero/>
      </div>

      <div className={`bg-white ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
