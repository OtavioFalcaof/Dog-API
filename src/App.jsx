import React from 'react';
import Navbar from './components/Navbar'

import Home from './pages/Home';
import Galery from './pages/Galery';
import BreedDog from './pages/BreedDog';
import SubBreed from './pages/SubBreed';



import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path ="/home" component={Home} />
          <Route path="/all_dogs" component={Galery} />
          <Route path="/breed_dogs" component={BreedDog} />
          <Route path="/sub_breed" component={SubBreed} />

      </Switch>
      </BrowserRouter>
  )
}

export default App
