import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Page404';
import Card from '../pages/Logement';
import About from '../pages/About';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
      <Router>
        <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/logement/:id' element={<Card/>}/>
  <Route path='*' element={<Error/>}/>
  <Route path='/about' element={<About/>}/>
 </Routes>
        <Footer/>
 </Router>
  
  );
}

export default App;
