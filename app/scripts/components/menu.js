// Component: Menu - lives at the top of the Page
import React, { Component } from "react";

import { createSlug } from '../utils';
import { SearchBar, SearchIconButton } from "./search";
import SearchBarProvider from './searchContextProvider';

const MenuLinkItem = name => (
  <a key={`nav-item-${name}`} href={createSlug(name)} className="nav-item">
    {name}
  </a>
);
const MenuLinks = ({ links }) => links.map(MenuLinkItem);

const menuLinksData = [
  "HOLIDAY",
  "WHAT'S NEW",
  "PRODUCTS",
  "BESTSELLERS",
  "GOODBYES",
  "STORES",
  "INSPIRATION"
];

class Menu extends Component {
  state = {
    showingSearch: true
  };

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      showingSearch: !prevState.showingSearch
    }));
  };

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    const { showingSearch } = this.state;

    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <MenuLinks links={menuLinksData} />
              <SearchIconButton open={this.showSearchContainer} />
            </nav>
          </div>
        </div>
        
        <SearchBarProvider>
          <SearchBar 
            show={showingSearch} 
            close={this.showSearchContainer}
          />
        </SearchBarProvider>
      </header>
    );
  }
}

module.exports = Menu;
