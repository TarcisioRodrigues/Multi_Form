import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FormStep } from './pages/FormStep';
import { FormStep2 } from './pages/FormStep2';




export const  Routes=() =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormStep} />
        <Route path="/step2"  component={FormStep2} />
        
      </Switch>
    </BrowserRouter>
  );
}


