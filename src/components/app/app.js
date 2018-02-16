import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import LandingPage from '../landingPage/landingPage';
import Register from '../register/register';
import Login from '../login/login';
import Pantry from '../pantry/pantry';
import NewRecipe from '../newRecipe/newRecipe';
import APIRecipeSearch from '../apiRecipeSearch/apiRecipeSearch';
import RecipeDetails from '../recipeDetails/recipeDetails';
import DeleteMsg from '../deleteMsg/deleteMsg';
import EditRecipe from '../editRecipe/editRecipe';
import SearchMyRecipes from '../searchMyRecipes/searchMyRecipes';
import APIRecipeSearchResults from '../apiRecipeSearchResults/apiRecipeSearchResults';
import Help from '../help/help';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/help" component={Help}/>
          <Route exact path="/home" component={Main} />
          <Route exact path="/recipeDetails/:recipeSlug" component={RecipeDetails} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pantry" component={Pantry} />
          <Route exact path="/newRecipe" component={NewRecipe} />
          <Route exact path="/apiRecipeSearch" component={APIRecipeSearch} />
          <Route exact path="/deleteMsg/:recipeSlug" component={DeleteMsg} />
          <Route exact path="/editRecipe/:recipeSlug" component={EditRecipe} />
          <Route exact path="/search/:searchTerm" component={SearchMyRecipes} />
          <Route exact path="/ideaSearch/:searchTerm" component={APIRecipeSearchResults} />
        </Switch>
      </div>
    );
  };
};


