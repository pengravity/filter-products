import Categories from '../categories/Categories';
import Search from '../search/Search';
import Product from './Product';
import './ProductList.css';

const ProductList = () => {
  return (
    <>
      <div className='header'>
        <header className='container'>
          <h1>
            <span> Product </span> Filter
          </h1>
          <div>
            <Search />
            <Categories />
          </div>
        </header>
        <div className='product-container'>
          <div className='products container'>
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
