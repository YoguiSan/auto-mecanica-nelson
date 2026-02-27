import ChatContextType from './chat';
import ThemeContextType from './theme';

type ContextType = {
  theme: ThemeContextType,
  chat: ChatContextType,
};

export default ContextType;