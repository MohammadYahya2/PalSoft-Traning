import React from 'react';
import './App.css';
import Navbar from './navbar'; 
import Post from './Post';
import Post2 from './post2';
import Post3 from './post3';
import Post4 from './Post4';
import Post5 from './Post5';
import Footer from './Footer';
import Footer2 from './Footer2';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Post/>
      <Post2/>
      <Post3/>
      <Post4/>
      <Post5/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;
