import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element ={<LandingPage/>}/>
        <Route path='/admin login'element ={<AdminLogin/>}/>
        <Route path='/user login'element ={<UserLogin/>}/>



        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;


//git init
//git add remote
// git add
// git status
//git commit -m "message"
//git branch -M main
//git push -u origin main


// ....for second time 
// git add
//git commit -m "message"
//git push