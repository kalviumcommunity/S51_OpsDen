import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main'
import Home from './Components/Home'
import SignInSignUpForm from './Components/Signup'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/signup' element={<SignInSignUpForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App