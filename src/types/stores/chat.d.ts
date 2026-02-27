export type MessagesType = {
  agent?: 'user' | 'ai';
  text?: string;
  error?: string;
};

type ChatContextType = {
  messages: MessagesType[] | [];
  chatId?: string | null;
};

export default ChatContextType;
