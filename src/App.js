import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import Home from './pages/Home';
import FestivalsIndex from './pages/festivals/Index'
import FestivalsShow from './pages/festivals/Show'
import FestivalsCreate from './pages/festivals/Create'
import FestivalsEdit from './pages/festivals/Edit'

import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';

const App = () => {

  useEffect(() => {
    if (localStorage.getItem('AUTH_TOKEN')) {
      setAuthenticated(true)
    }
  }, [])

  const [authenticated, setAuthenticated] = useState(false)

  const onAuthenticated = (auth, token = '') => {
    setAuthenticated(auth)

    if (auth) {
      localStorage.setItem('AUTH_TOKEN', token)
    }
    else if (!auth) {
      localStorage.removeItem('AUTH_TOKEN')
    }
  }

  let protectedRoutes

  if (authenticated) {
     protectedRoutes = (
      <>
        <Route path='/festivals/create' element={<FestivalsCreate authenticated={authenticated} onAuthenticated={onAuthenticated} />} />
        <Route path='/festivals/show/:id' element={<FestivalsShow authenticated={authenticated} onAuthenticated={onAuthenticated} />} />
        <Route path='/festivals/edit/:id' element={<FestivalsEdit authenticated={authenticated} onAuthenticated={onAuthenticated} />} />
      </>
    )
  }

  return (
    <div className="App">
      <Router>
        <NavBar authenticated={authenticated} onAuthenticated={onAuthenticated} />
        <Routes>
          <Route path='/' element={<Home authenticated={authenticated} onAuthenticated={onAuthenticated} />} />
          <Route path='/festivals' element={<FestivalsIndex authenticated={authenticated} onAuthenticated={onAuthenticated} />} />
          {protectedRoutes ? protectedRoutes : ''}
          <Route path='*' element={<NotFound /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
