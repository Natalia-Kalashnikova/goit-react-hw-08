import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';


const SearchBox=()=> {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = e => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.search_container}>
      <p>Find contacts by name or number</p>
      <input
        className={css.search_field}
        type="text"
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
}


export default SearchBox;