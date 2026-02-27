'use client'

import Context from '@amn/stores';
import Div from './styles';
import { useContext, useState } from 'react';
import ChatbotService from '@amn/services/chatbot';

type Props = {};

const ChatbotDialog = (): React.FC<Props> => {
  const [open, setOpen] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<string | undefined>();
  const {
    chat,
    setChat,
  } = useContext(Context);

  const send = async (chatId: string, question: string) => {
    const response = await ChatbotService.ask(question, chatId);

    const {
      chatId: id,
      text,
      chatHistory,
    } = response;
  };

  const [chatId] = Object.keys(chat);

  return (
    <Div>
      {
        open
          ? (
            <div id="">
          
            </div>
            <input
              type="text"
              onChange={(event) => send(chatId, event.target.value)}
            />
          ) : (
          <></>
        )
      }
    </Div>
  );
};

export default ChatbotDialog;
