import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="mx-auto bg-white">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
