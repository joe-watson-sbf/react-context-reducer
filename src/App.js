import React from 'react';
import NavBar from './components/NavBar/NavBar';
import CountryState from './Context/Country/CountryState';
import Site from './components/Site/Site';

const App = () => {

      return (
        <CountryState>
          <NavBar/>
          <Site/>
        </CountryState>
      )
  }
export default App;
