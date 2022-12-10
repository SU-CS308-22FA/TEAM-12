import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { HomeScreen } from './Screens/HomeScreen';
import { AuthScreen } from './Screens/AuthScreen';
import { SignUpScreen } from './Screens/SignUpScreen';
import { AdminScreen } from './Screens/AdminScreen';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditScreen } from './Screens/EditScreen'
import { AddMatchScreen } from './Screens/AddMatchScreen'
import { FixtureScreen } from './Screens/FixtureScreen'
import {EditFixtureScreen} from './Screens/EditFixtureScreen'
import {EditMatchScreen} from './Screens/EditMatchScreen'
import {MatchScreen} from './Screens/MatchScreen'

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
            <Route path="/edit/:id" element={<EditScreen user={user} setUser={setUser}/>} />
            <Route path="/adminpanel" element={<AdminScreen/>} />
            <Route path="/addmatch" element={<AddMatchScreen/>} />
            <Route path="/matches" element={<FixtureScreen/>} />
            <Route path="/matches/editfixture" element={<EditFixtureScreen/>} />
            <Route path="/matches/editfixture/:id" element={<EditMatchScreen/>} />
            <Route path="/matches/:id" element={<MatchScreen user={user}/>} />
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
