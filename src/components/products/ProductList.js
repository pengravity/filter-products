import { useState } from 'react';

import { items } from '../../products-data';
import Categories from '../categories/Categories';
import Search from '../search/Search';
import Product from './Product';
import './ProductList.css';
import { productsData } from '../../products-data';

const ProductList = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <>
      {console.log(products)}
      <div className='header'>
        <header className='container'>
          <h1 className='--color-white --text-center'>
            <span className='--color-danger'> Product </span> Filter
          </h1>
          <div className='--flex-between --flex-dir-column --py'>
            <Search />
            <Categories />
          </div>
        </header>
        <div className='product-container'>
          <div className='products container --grid-25 --py2'>
            {products.map((product) => {
              const { id, title, img, price } = product;
              return (
                <div key={id}>
                  <Product title={title} img={img} price={price} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
