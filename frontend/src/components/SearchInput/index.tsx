import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './styles.scss';

const SearchInput: React.FC = () => {
  return (
    <div className="search">
      <div className="search__logo">
        <SearchIcon color="secondary" size="large" />
      </div>
      <input type="text" placeholder="Search Drive..." className="search__input"/>
    </div>
  );
}

export default SearchInput;
