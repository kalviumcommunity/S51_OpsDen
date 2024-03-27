import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Main'
import Signup from './Components/Signup'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/frontPage' element={<Home/>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App