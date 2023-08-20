import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Stores from './pages/Stores';
import LayoutMain from './layout/layoutmain';
import Layout from './layout/layout';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element = {<LayoutMain/>}>
        <Route path='/' element = {<Home/>}></Route>
        </Route>  
        <Route path='/' element = {<Layout/>}>
        <Route path='/About' element = {<About/>}></Route>
        <Route path='/Stores' element = {<Stores/>}></Route> 
        </Route>
     </Routes>
    </>
  );
}

export default App;
