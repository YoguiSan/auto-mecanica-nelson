import React from 'react';
import Header from './styles';
import Context from '@amn/stores';

const TopMenu: React.FC = () => {
  const { theme } = React.useContext(Context);
  return <Header>

  </Header>;
};

export default TopMenu;
