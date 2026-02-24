'use client'

import Context from '@amn/stores';
import Div from './styles';
import { useContext } from 'react';

type Props = {};

const ChatbotDialog = (): React.FC<Props> => {
  const {
    chat,
  } = useContext(Context);

  return (
    <Div>

    </Div>
  );
};

export default ChatbotDialog;
