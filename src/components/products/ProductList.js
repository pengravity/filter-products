import { useState, useEffect } from 'react';

import Categories from '../categories/Categories';
import Search from '../search/Search';
import Product from './Product';
import './ProductList.css';
import { productsData } from '../../products-data';

const allCategories = [
  'all',
  ...new Set(productsData.map((product) => product.category)),
];

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterProducts = (category) => {
    if (category === 'all') {
      setProducts(productsData);
      return;
    }
    const newProducts = productsData.filter(
      (product) => product.category === category
    );
    setProducts(newProducts);
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
            <Categories categories={categories} filterItems={filterProducts} />
          </div>
        </header>
        <div className='product-container'>
          <div className='products container --grid-25 --py2'>
            {filteredProducts.length === 0 ? (
              <h3>No products found :-(</h3>
            ) : (
              filteredProducts.map((product) => {
                const { id, title, img, price } = product;
                return (
                  <div key={id}>
                    <Product title={title} img={img} price={price} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
