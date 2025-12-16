import React from 'react';
import Context from '@amn/stores';

const TopMenu: React.FC = () => {
  const { theme } = React.useContext(Context);
  return <header>Top Menu</header>;
};

export default TopMenu;
