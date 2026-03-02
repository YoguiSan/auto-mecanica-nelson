'use client'

import { useContext, useState } from 'react';
import ChatbotService, { ChatbotResponseType } from '@amn/services/chatbot';
import Context from '@amn/stores';
import Div from './styles';
import { MessagesType } from '@amn/types/stores/chat';

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

  const send = async () => {
    if (!currentQuestion || currentQuestion.length < 3) {
      setError('Favor inserir ao menos 3 caracteres');
      return;
    }

    setFetching(true);

    const response: ChatbotResponseType = await ChatbotService.ask(currentQuestion as string, chatId as string);

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

    if (!chatId) {
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
          <></>
        )
      }
    </Div>
  );
};

export default ChatbotDialog;
