import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './components/SignIn/SignIn'
import ItemList from './components/ItemList/ItemList'
import SignUp from './components/SignUp/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/signIn" element = {<SignIn/>}/>
        <Route path= "/signUp" element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
