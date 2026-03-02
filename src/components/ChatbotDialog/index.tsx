'use client'

import { useContext, useEffect, useState } from 'react';
import ChatbotService, { ChatbotResponseType } from '@amn/services/chatbot';
import Context from '@amn/stores';
import { MessagesType } from '@amn/types/stores/chat';
import Div from './styles';
import MessageIcon from '@icons/send-message.svg';
import Image from 'next/image';

type Props = {};

const ChatbotDialog = (): React.FC<Props> => {
  const [open, setOpen] = useState<boolean>(true);
  const [error, setError] = useState<string | false>(false);
  const [fetching, setFetching] = useState<boolean>(false);

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

  useEffect(() => {
    console.log('chatId', chatId)
    console.log('setChatId', setChatId)
  }, [chatId])

  const send = async () => {
    if (!currentQuestion || currentQuestion.length < 3) {
      setError('Favor inserir ao menos 3 caracteres');
      return;
    }

    setFetching(true);

    const response: ChatbotResponseType = await ChatbotService.ask(currentQuestion as string, chatId as string);

    console.log('response', response)

    const {
      chatId: id,
      answer: text,
      chatHistory,
    } = response as ChatbotResponseType;

    const updatedHistory: MessagesType[] = chatHistory || [];

    updatedHistory.push({
      text,
      agent: 'ai',
    });

    setMessages!(updatedHistory);

    setFetching(false);
    setError(false);

    if (!chatId || chatId === 'null') {
      console.log('30 ovos por 10 reais')
      console.log('id', id)
      setChatId!(id);
    }
  };

  return (
    <Div open={open}>
      {
        open
          ? (
            <>
              <div id="chatbot-dialog-header">
                <h3>Faça uma pergunta</h3>
                <button
                  id="chatbot-dialog-close"
                  onClick={() => setOpen(false)}
                >Fechar</button>
              </div>
              <div id="chatbot-history-container">
                {
                  messages.map(({
                    agent,
                    text,
                  }) => (
                    <>
                      <p className={agent}>
                        {text}
                      </p>
                    </>
                  ))
                }
                {
                  fetching
                    ? <p>Loading</p>
                    : ''
                }
              </div>
              {
                error
                  ? <p className="error-message">{error}</p>
                  : ''
              }
              <div id="chatbot-input-container">
                <input
                  type="text"
                  onChange={(event) => setCurrentQuestion(event.target.value)}
                  disabled={fetching}
                  id="chatbot-input"
                />
                <button
                  onClick={send}
                  id="chatbot-submit-button"
                >
                  Enviar
                </button>
              </div>
            </>
          ) : (
          <>
            <button
              id="chatbot-open"
              onClick={() => setOpen(true)}
            >
              <Image src={MessageIcon} alt="" slot="icon" />
            </button>
          </>
        )
      }
    </Div>
  );
};

export default ChatbotDialog;
