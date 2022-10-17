import './Categories.css';

const capitalizeFirst = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='--flex-center'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='btn --btn --btn-secondary'
            key={index}
            onClick={() => filterItems(category)}
          >
            {capitalizeFirst(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
