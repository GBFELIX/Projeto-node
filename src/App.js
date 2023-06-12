import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Company from './components/pages/Company';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import { NavBar } from './components/layout/Navbar';
import Container from './components/layout/Container';
import { Footer } from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Newproject from './components/pages/Newproject';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass='min-height' >
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Contato' element={<Contato/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Company' element={<Company/>}/>
          <Route path='/Newproject' element={<Newproject/>}/>
          <Route path='/project/:id' element={<Project/>}/>
       </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
