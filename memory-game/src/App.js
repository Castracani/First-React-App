import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Game} />
        
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
