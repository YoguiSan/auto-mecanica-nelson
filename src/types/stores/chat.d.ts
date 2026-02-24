export type ChatType = {
  agent?: 'user' | 'ai';
  text?: string;
  error?: string;
};

export type ChatContextType = {
  chat: ChatType[] | [];
  setChat?: (chat: ChatType) => void;
}

export default ChatContextType;
