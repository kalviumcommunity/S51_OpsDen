import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Main'
import TitlePage from './Components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TitlePage/>}></Route>
          <Route path='/frontPage' element={<Home/>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App