import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main'
import SignInSignUpForm from './Components/Signup'
import './App.css'
import Guide from './Components/Guide'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/signup' element={<SignInSignUpForm/>}></Route>
          <Route path='/guide' element={<Guide/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App