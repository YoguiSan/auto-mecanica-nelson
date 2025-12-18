import styles from 'styled-components';
import { mobile } from '@amn/styles/Breakpoints';

type HeaderStylesType = {
  theme?: 'light' | 'dark',
};

export default styles.header<HeaderStylesType>`
${({ theme = 'light' }) => `
  // FIXME: Adjust colors as needed
  background: ${theme === 'light' ? '#ffffff' : '#1f2937'};
  width: 100%;
  
  @media all and (max-width: ${mobile}px) {

  }
`}`;
