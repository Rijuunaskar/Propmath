import logo from './logo.svg';
import './App.css';
import Signup from './component/signup.js';
import LoginPage from './component/Loginpage.js';
import Homepage from './component/Homepage.js';
import Querypage from './component/Querypage.js';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ForgetPassword from './component/Forgetpassword';
import Footer from './component/Footer'
import ProtectedRoute from './component/ProtectedRoute';
import Avm from './component/Avm';
import Contactus from './component/Contatct';
function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route element={<ProtectedRoute/>}>
                <Route path="/" element={<Homepage />}></Route>
              </Route>
              <Route element={<ProtectedRoute/>}>
                <Route path="/product" element={<Avm />}></Route>
              </Route>
              <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
              <Route path="/SignUp" element={<Signup />}></Route>
              <Route path="/Querypage" element={<Querypage />}></Route>
              <Route path="/contact" element={<Contactus />}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
