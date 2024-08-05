import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './sections/Main';
import Separator from './sections/Separator';
import Function from './sections/Function';
import Data from './sections/Data';
import Tech from './sections/Tech';
import Value from './sections/Value';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton'; // Import the FloatingButton component

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Separator />
      <Function />
      <Data />
      <Tech />
      <Value />
      <Footer />
      <FloatingButton /> {/* Add the FloatingButton component here */}
    </div>
  );
}

export default App;
