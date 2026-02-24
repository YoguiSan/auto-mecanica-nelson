'use client';

import styles from 'styled-components';
import {
  darkBlue,
  vibrantOrange,
  white,
} from '@amn/styles/Colors';
import {
  family,
  size,
} from '@amn/styles/Fonts';
import { tablet } from '@amn/styles/Breakpoints';

type ChatbotDialogStylesType = {
  theme?: 'light' | 'dark',
  image?: string,
};

export default styles.div<ChatbotDialogStylesType>`
`;