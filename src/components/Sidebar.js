import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Sidebar.css';
import { getRecipe } from '../store/recipe.actions'; 

class SideBar extends Component {

  render() {
    const { all } = this.props.recipes;
    const recipes = all;
    console.log('sidebar recipes', recipes);

    return (
      <div id="side-nav">
        <ul>
          {recipes.map(item => {
            return (
              <li key={item._id}>
                <NavLink to={`/recipes/${item._id}`}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => {
  return { recipes: state.recipes };
}, { getRecipe })(SideBar);
