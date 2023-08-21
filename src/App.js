import React from 'react';
import MovieSearch from './comp/moviesearch';
import { Route, Routes } from 'react-router-dom';
import Errorpage from './comp/errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deatilpage from './comp/deatilpage';


const App = () => {
  return (
    <div>
    

      <Routes>
        <Route path="/"      element={<MovieSearch /> } />
        <Route path="/details/:id"   element={<Deatilpage />} />
        <Route path="*"      element={<Errorpage /> } />
      </Routes>
    </div>
  );
};

export default App;
