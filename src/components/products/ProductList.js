import { useState, useEffect } from 'react';

import Categories from '../categories/Categories';
import Search from '../search/Search';
import Product from './Product';
import './ProductList.css';
import { productsData } from '../../products-data';

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <>
      <div className='header'>
        <header className='container'>
          <h1 className='--color-white --text-center'>
            <span className='--color-danger'> Product </span> Filter
          </h1>
          <div className='--flex-between --flex-dir-column --py'>
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories />
          </div>
        </header>
        <div className='product-container'>
          <div className='products container --grid-25 --py2'>
            {filteredProducts.map((product) => {
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
