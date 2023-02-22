import React from 'react';
import './App.css';
import { BrowserRouter  , Route , Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/hotel/Hotel';



const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/hotels' element = {<List/>} />
    <Route path='/hotels/:id' element = {<Hotel/>} />
   </Routes>
     </BrowserRouter>
     </div>
  )
}

export default App