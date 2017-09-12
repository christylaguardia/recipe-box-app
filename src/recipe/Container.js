import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipe, getAllRecipes } from './actions'; 
import Sidebar from './Sidebar';
import RecipeDetails from './Details';

function NoRecipe() {
  return (
    <h1>Click on a recipe to view.</h1>
  );
}

class RecipeContainer extends Component {

  componentDidMount() {
    this.props.getAllRecipes();
  }

  componentDidUpdate() {
    const selectedId = this.props.location.pathname.split('/recipes/')[1];

    if (this.props.recipes.selected._id !== selectedId) {
      this.props.getRecipe(selectedId);
    }
  }

  render() {
    return (
      <div>
        <div className="left-side">
          <Sidebar />
        </div>
        {/* TODO: create routes for view, edit, add, etc. */}
        <div className="right-side">
          {this.props.recipes.selected._id ? <RecipeDetails /> : <NoRecipe /> }
        </div>
      </div>
    );
  }
    
}

export default connect(state => {
  return {
    recipes: state.recipes,
    recipe: state.recipe
  };
}, { getRecipe, getAllRecipes })(RecipeContainer);