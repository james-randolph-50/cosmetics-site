import React from 'react';
import { formatUSD, createSlug } from '../utils';
import { SearchBarConsumer } from './searchContextProvider';
const ProductImage = ({ src, name }) => (
  <a className='aspect-ratio-box image' href={createSlug(name, 'product')}>
    <img className='aspect-ratio-box-item' src={src} alt={name} />
  </a>
);
const BuzzWord = (name, i) => (
  <SearchBarConsumer key={`tag-${name}-${i}`}>
    {({ onSearch }) => (<li key={`tag-${name}-${i}`} onClick={() => onSearch(name)}>{name}</li>)}
  </SearchBarConsumer>);

const ProductBuzzWords = ({ words }) => (
  <ul className='tags'>{words.map(BuzzWord)}</ul>
);
const Product = ({ _id, price, picture, name, about, tags }) => {
  const [firstSentence = ''] = about.split('. ');

  return (
    <div key={_id}
      className='product'
      data-product-id={`PROD${_id}`}
      data-sku-base-id={_id}
    >
      <div className='details'>
        <h3>{name}</h3>
        <p className='price'>{formatUSD(price)}</p>
        <div>
          <ProductBuzzWords words={tags} />
          <p className='description'>{firstSentence}.</p>
        </div>
      </div>
      <ProductImage src={picture} name={name} />
    </div>
  );
};

export default Product;
