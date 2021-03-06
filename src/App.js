import Home from './pages/Home'
import Posts from './pages/Posts'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";

import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';


function App() {
  const user = useSelector((state)=> state.user)
  const cUser = user.currentUser !== null;
  return (
    <Router>
      <Routes>
        <Route path='/' element={cUser ? <Home/> : <LoginPage/>}/>
        
        { <Route path='/posts' element={cUser ? <Posts/>: <Home/>}/> }
      </Routes>
    </Router>
  );
}

export default App;


// {cUser ? <Route path='/posts' element={<Posts/>}/> : <Route path='/' element={<Home/>}/> }