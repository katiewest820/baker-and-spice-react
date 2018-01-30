import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MyRecipes from '../myRecipes/myRecipes';
import NewRecipe from '../newRecipe/newRecipe';
import Pantry from '../pantry/pantry';
export default class Main extends React.Component{

  render(){
    return(
      <main>
        <Switch>
          <Route exact path="/" component={MyRecipes} />
          <Route path="/newRecipe" component={NewRecipe} />
          <Route path="/pantry" component={Pantry} />
        </Switch>
      </main>
    )
  }
}