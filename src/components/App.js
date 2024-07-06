


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Page404';
import Card from '../pages/Card'
import About from '../pages/About'

function App() {
  return (
      <Router>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/card/:title' element={<Card/>}/>
  <Route path='*' element={<Error/>}/>
  <Route path='/about' element={<About/>}/>
 </Routes>
 </Router>
  
  );
}

export default App;
