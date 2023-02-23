import React from 'react';
import Router from './Router';
import UserContextProvider from '@/contexts/UserContextProvider';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Nav />
        <Router />
      </UserContextProvider>
    </div>
  );
};

export default App;
