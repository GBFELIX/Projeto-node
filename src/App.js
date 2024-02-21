import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Home from './components/pages/Home';
import Create from './components/service/Create';
import Cadpartida from './components/pages/Cadpartida';
import Match from './components/service/Match';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Cadpartida' element={<Cadpartida/>}/>
          <Route path='/Match' element={<Match/>}/>
       </Routes>
    </Router>
  );
}

export default App;
