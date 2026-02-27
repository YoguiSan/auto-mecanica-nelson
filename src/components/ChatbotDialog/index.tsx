'use client'

import { useContext, useState } from 'react';
import ChatbotService, { ChatbotResponseType } from '@amn/services/chatbot';
import Context from '@amn/stores';
import Div from './styles';
import { MessagesType } from '@amn/types/stores/chat';

type Props = {};

const ChatbotDialog = (): React.FC<Props> => {
  const [open, setOpen] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<string>();
  const {
    chat,
  } = useContext(Context);

  const {
    chatId,
    setChatId,
    messages,
    setMessages,
  } = chat;

  const send = async () => {
    if (!currentQuestion || currentQuestion.length < 3) {
      return;
    }

    const response: ChatbotResponseType = await ChatbotService.ask(currentQuestion as string, chatId as string);

    const {
      chatId: id,
      text,
      chatHistory,
    } = response as ChatbotResponseType;

    const updatedHistory: MessagesType[] = messages;

    updatedHistory.push({
      text,
      agent: 'ai',
    });

    setMessages(updatedHistory);

    if (!chatId) {
      setChatId(id);
    }
  };

  return (
    <Div>
      {
        open
          ? (
            <>
              <div id="">
            
              </div>
              <input
                type="text"
                onChange={(event) => setCurrentQuestion(event.target.value)}
              />
              <button onClick={send}>Enviar</button>
            </>
          ) : (
          <></>
        )
      }
    </Div>
  );
};

export default ChatbotDialog;
