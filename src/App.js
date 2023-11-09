import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FestivalsIndex from './pages/festivals/Index'
import FestivalsShow from './pages/festivals/Show'
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/festivals' element={<FestivalsIndex />} />
          <Route path='/festivals/:id' element={<FestivalsShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
