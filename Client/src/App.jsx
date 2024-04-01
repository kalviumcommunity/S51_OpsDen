import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main'
import Home from './Components/Home'
import SignInSignUpForm from './Components/Signup'
import './App.css'
import Guide from './Components/Guide'
import Post from './Components/Post'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/frontPage' element={<Main/>}></Route>
          <Route path='/signup' element={<SignInSignUpForm/>}></Route>
          <Route path='/guide' element={<Guide/>}></Route>
          <Route path='/post' element={<Post/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App