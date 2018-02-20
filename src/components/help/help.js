import React from 'react';
import Header from '../header/header';
import './help.css';
import {Collapse} from 'react-collapse';

export default class Help extends React.Component{
  constructor(){
    super();
    this.state = {
      newRecipeIsOpened: false,
      editIsOpened: false,
      searchIsOpened: false,
      pantryIsOpened: false,
    }
  };

toggleOpenClose(key){
  this.setState({[key]: !this.state[key]});
};

  render(){
    return(
      <div>
        <Header />
        <div className="helpInfoDiv">
          <h2 className="new" onClick={this.toggleOpenClose.bind(this, 'newRecipeIsOpened')}>Creating New Recipes</h2>
          <Collapse isOpened={this.state.newRecipeIsOpened} >
            <p>To begin creating a new recipe click on "New Recipe" in the header.</p>
            <p>Complete your Recipe Title and instructions entries. To add each recipe ingredient, complete your entry and click "Add" when finished.</p>
            <p>If you would like to include an image, click the "Choose file" button to upload one.</p>
            <p>When finished, click the "Submit Recipe" button at the bottom of the page.</p>
          </Collapse>
          <h2 onClick={this.toggleOpenClose.bind(this, 'editIsOpened')}>Editing Recipes</h2>
          <Collapse isOpened={this.state.editIsOpened}>
            <p>To Edit a recipe, click on the recipe name from your home page.</p> 
            <p>Click on the "Edit" button at the bottom of the page and make any necessary changes to your entries.</p>
            <p>When you are ready to submit your changes, click on the "Submit Changes" button at the bottom of the page.</p>
          </Collapse>
          <h2 onClick={this.toggleOpenClose.bind(this, 'searchIsOpened')}>Searching For Recipe Ideas</h2>
          <Collapse isOpened={this.state.searchIsOpened}>  
            <p>To search for recipe ideas click on "Search" in the header. Enter the recipe title or ingredient you wish to see results for and click the "Search" button.</p>
            <p>To see recipe details from your search results, click on any of the recipe title names.</p>
          </Collapse>
          <h2 onClick={this.toggleOpenClose.bind(this, 'pantryIsOpened')}>Pantry Items</h2>
          <Collapse isOpened={this.state.pantryIsOpened}>
            <p>To add pantry items from a recipe, after selecting In Stock/Out of Stock status from the dropdown, click on the "Add to Pantry" button next to the item you wish to add.</p>
            <p>To delete a pantry item, click on "Pantry" in the header. Click on the trash can below the item you wish to delete.</p>
            <p>To change In Stock/Out of Stock status, click on the toggler below the pantry item. Red toggle = Out of Stock, Green toggle = In Stock.</p>
          </Collapse>
        </div>
      </div>
    )
  };
};