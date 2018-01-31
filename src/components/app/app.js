import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './app.css';
import Main from '../main/main';
import LandingPage from '../landingPage/landingPage';
import Register from '../register/register';
import Login from '../login/login';
import Pantry from '../pantry/pantry';
import NewRecipe from '../newRecipe/newRecipe';
import RecipeInspiration from '../recipeInspiration/recipeInspiration';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/main" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pantry" component={Pantry} />
          <Route exact path="/newRecipe" component={NewRecipe} />
          <Route exact path="/recipeInspiration" component={RecipeInspiration} />
        </Switch>
      </div>
    );
  }
}


