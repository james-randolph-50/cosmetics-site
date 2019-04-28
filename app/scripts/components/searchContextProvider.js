// src/providers/AccountProvider.js
import React, { Component } from "react";
import { fetchData, findSuggestions } from "../utils";

const SearchBarContext = React.createContext();

// Injectable for use in other components
export const SearchBarConsumer = SearchBarContext.Consumer;
class SearchBarProvider extends Component {
  state = {
    term: '',
    suggestions: []
  };

  getSuggestions = () => {
    const { term } = this.state;
    const url = `http://localhost:3035/api/products/published?term=${term}`;

    if (term.length > 1) {
      fetchData(url).then(suggestions => {
        this.setState({suggestions});
      });
    }
  };

  onSearch = (term) => {
    this.setState({ term }, this.getSuggestions);
  };
  
  render() {
    const { term, suggestions } = this.state;
    const { children } = this.props;

    return (
      <SearchBarContext.Provider
        value={{
          term,
          suggestions,
          onSearch: this.onSearch,
          getSuggestions: this.getSuggestions
        }}
      >
        {children}
      </SearchBarContext.Provider>
    );
  }
}

export default SearchBarProvider;
