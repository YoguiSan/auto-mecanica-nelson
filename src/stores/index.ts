'use client';
import ContextType from '@amn/types/stores';
import { createContext } from 'react';
import theme from './theme';
import chat from './chat';

const Context = createContext<ContextType>({
  theme,
  chat,
});

export default Context;
