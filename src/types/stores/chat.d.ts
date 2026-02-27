export type MessagesType = {
  agent?: 'user' | 'ai';
  text?: string;
  error?: string;
};

type ChatContextType = {
  messages: MessagesType[] | [];
  chatId?: string | null;
  setMessages: (messages: MessagesType[]) => void;
  setChatId: (chatId: string) => void;
};

export default ChatContextType;
