import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className="formInput"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      ></input>
    </div>
  );
};

export default SearchBox;