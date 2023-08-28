import React, { useState } from 'react';
import Navbar from './NavBar/Navbar';
import Gallerybody from './Gallerybody/Gallerybody';
import './App.css';
// import Footer from "./Footer/Footer"
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Gallerybody theme={theme} />
 {/*      <Footer theme={theme}/>*/}
    </div>
  );
}

export default App;
