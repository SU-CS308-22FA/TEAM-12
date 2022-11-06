import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { HomeScreen } from './Screens/HomeScreen';
import { AuthScreen } from './Screens/AuthScreen';
import { SignUpScreen } from './Screens/SignUpScreen';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[user,setUser] = useState(null);
  return (
    <Router>
      <Header user={user} setUser={setUser}/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen user={user}/>} exact />
            <Route path="/signin" element={<AuthScreen setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpScreen/>} />
          </Routes>
        </Container>
      </main>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}



export default App;
