import style from './style';
import { Navbar, Hero, Footer } from './components';
import Form from './components/Form';

function App() {
  return (
    <div className="bg-primary">
      <div className={`bg-primary`}>
          <Navbar />
      </div>

      <div className={`bg-primary`}>
        <Hero />
      </div>

      <div className={`bg-white`}>
        <Form/>
      </div>

      <div className={`bg-white`}>
        <Footer />
      </div>
    </div>
  )
}

export default App
