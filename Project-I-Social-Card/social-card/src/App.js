import React from 'react';
import './App.css';
import CardBanner from './components/CardComponents/CardBanner';
import Sidebar from './components/SidebarComponents/Sidebar';

const App = () => {
  return (
    <div className ="container-app">
      <Sidebar />
      <CardBanner />
    </div>
  );
};

export default App;
