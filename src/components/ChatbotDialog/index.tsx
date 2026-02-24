'use client'

import Context from '@amn/stores';
import Div from './styles';
import { useContext, useState } from 'react';
import ChatbotService from '@amn/services/chatbot';

type Props = {};

const ChatbotDialog = (): React.FC<Props> => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    chat,
  } = useContext(Context);

  const send = async (chatId: string, question: string) => {
    const response = await ChatbotService.ask(question, chatId);
  };

  const [chatId] = Object.keys(chat);

  return (
    <Div>

    </Div>
  );
};

export default ChatbotDialog;
