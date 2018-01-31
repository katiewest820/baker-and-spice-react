import React from 'react';
//import {connect} from 'react-redux';
import Header from '../header/header';
import MyRecipes from '../myRecipes/myRecipes';
// import Pantry from '../pantry/pantry';
// import NewRecipe from '../newRecipe/newRecipe';
import {Switch, Route} from 'react-router-dom';

export default class Main extends React.Component{

  render(){
    return(
      <main>
        <Header />
        <MyRecipes />
      </main>
    )
  }
}

//export default connect()(Main)