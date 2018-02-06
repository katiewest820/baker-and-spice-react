import React from 'react';
import Header from '../header/header';
import MyRecipes from '../myRecipes/myRecipes';
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
