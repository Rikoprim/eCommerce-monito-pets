import { Route, Routes } from 'react-router-dom';
import Home from './views/Home'
import Contact from './views/Contact'
import Category from './views/Category'
import About from './views/About'
import Detail from './views/Detail'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/detail' element={<Detail/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
