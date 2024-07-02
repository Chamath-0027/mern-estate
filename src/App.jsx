import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';

export default function App() {
  return (

<BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
      
    </Routes>
      </BrowserRouter>  );
}
