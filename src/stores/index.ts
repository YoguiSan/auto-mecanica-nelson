'use client';
import ContextType from '@amn/types/stores';
import { createContext } from 'react';
import theme from './theme';


const Context = createContext<ContextType>({
  theme,
});

export default Context;
