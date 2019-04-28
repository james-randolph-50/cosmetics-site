import React from 'react';
import { SearchBarConsumer } from './searchContextProvider';
import Product from './product';

export const notFoundMessgage = 'No products found. Please try an alternate search term.';
export const SearchIconButton = ({ open }) => (
  <a href='#' onClick={open}>
    <i className='material-icons search'>search</i>
  </a>
);
export const SearchCloseButton = ({ close }) => (
  <a href='#' onClick={close}>
    <i className='material-icons close'>close</i>
  </a>
);
export const Suggestions = ({list}) => (
  <section className={`suggestions ${list.length < 3 ? 'around' : 'even'}`}>
    {list ? list.map(Product) : notFoundMessgage}
  </section>
);

export const SearchBar = ({show, close}) => (
  <SearchBarConsumer>
    {
      ({
        suggestions,
        term,
        onSearch
      }) => (
        <div className={`${show ? 'showing' : ''} search-container`}>
          <input type='text' autoComplete='off' placeholder='Enter search term' value={term} onChange={({target}) => onSearch(target.value)} />
          <SearchCloseButton close={close} />
          {suggestions.length > 0 && <Suggestions list={suggestions} />}
        </div>
      )
    }
  </SearchBarConsumer>
);
