import{ BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import home from './pages/home';
import signin from './pages/signin';
import signUp from './pages/signUp';
import profile from './pages/profile';
import about from './pages/about';

export default function App() {
  return (
<BrowserRouter>

    <Routes>
      <Route path='/' element={<home />} />
      <Route path='/sign-in' element={<signin />} />
      <Route path='/sign-Up' element={<signUp />} />
      <Route path='/profile' element={<profile />} />
      <Route path='/about' element={<about />} />
      
    </Routes>
      </BrowserRouter>  )
}
