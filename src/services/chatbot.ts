import Config from '@amn/utils/config';
import Request from './request';
import { MessagesType } from '@amn/types/stores/chat';

// FIXME: adicionar tipos corretos
export type ChatbotResponseType = {
  chatId: string,
  answer: string,
  chatHistory: MessagesType;
} | {
  error: unknown;
};

const ask = async (query: string, chatId?: string): Promise<ChatbotResponseType> => {
  const {
    CHANNEL_API_URL: url,
  } = Config;

  try {
    const request = await Request.get(`${(url as string)}/ask`, {
      query,
    }, {
      chatId,
    });
  
    return request as unknown as ChatbotResponseType;
  } catch (error) {
    return {
      error,
    } as unknown as ChatbotResponseType;
  }
};

const ChatbotService = {
  ask,
};

export default ChatbotService;
