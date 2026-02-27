import ChatContextType, { MessagesType } from '@amn/types/stores/chat';
import { useState } from 'react';

const [messages, setMessages] = useState<MessagesType[]>([]);
const [chatId, setChatId] = useState<string | null>(null);

const ChatContext: ChatContextType = {
  messages,
  chatId,
  setMessages,
  setChatId,
};

export default ChatContext;
