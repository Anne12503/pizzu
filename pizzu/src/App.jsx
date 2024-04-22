import './App.css'
import { Routes,Route } from 'react-router-dom';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import Home from './pages/Auth/Home/Home';


function App() {

  return (
    <>

      <Routes>
        
        <Route  path="/" element={<SignUp />} />
        <Route  path="/SignIn" element={<SignIn />} />
        <Route  path="/SignUp" element={<SignUp />} />
        <Route  path="/Home" element={<Home />} />
        

      </Routes>
    </>
  )
}

export default App
