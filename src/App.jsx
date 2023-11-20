import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Home from './Components/Home'
import Artifact from './Components/Artifact'
import Genshin from './Components/Genshin'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/genshin' element={<Genshin />}></Route>
        <Route path='/artifact' element={<Artifact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
