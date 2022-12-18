import style from './style';
import { Navbar, Hero, Footer } from './components';

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <div className={`bg-white`}>
        <Footer />
      </div>
    </div>
  )
}

export default App
