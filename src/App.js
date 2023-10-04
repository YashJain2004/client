import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './style/App.scss';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Community from './components/Community'
import Shopping from './components/Shopping'
import { Toaster } from 'react-hot-toast'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/blogs"} element={<Blogs/>}/>
      <Route path={"/community"} element={<Community/>}/>
      <Route path={"/shopping"} element={<Shopping/>} />
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
    </Routes>
    <Toaster/>
   </Router>
  )
}

export default App;
