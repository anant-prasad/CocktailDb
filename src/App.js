import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Navbar from './components/Navbar'
export default function App() {
  return <Router>
    <Navbar />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><About /></Route>
      <Route path="/cocktail/:id" component={SingleCocktail}></Route>
      <Route path="*"><Error /></Route>
    </Switch>
  </Router>;
}
