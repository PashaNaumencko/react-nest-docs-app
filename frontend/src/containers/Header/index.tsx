import React from 'react';
import SearchInput from '../../components/SearchInput';

import './styles.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__brand">
        <h3>My Drive</h3>
      </div>
      <div className="header__middle">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
