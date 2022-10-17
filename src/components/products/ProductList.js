import Categories from '../categories/Categories';
import Search from '../search/Search';
import Product from './Product';
import './ProductList.css';

const ProductList = () => {
  return (
    <>
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
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
