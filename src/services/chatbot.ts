import Config from '@amn/utils/config';
import Request from './request';
import { MessagesType } from '@amn/types/stores/chat';

const {
  CHANNEL_API_URL: url,
} = Config;

export type ChatbotResponseType = {
  chatId: string,
  answer: string,
  chatHistory: MessagesType[];
};

export type ChatbotStatusResponseType = {
  status: 200 | 500,
  detail?: string,
};

const ask = async (query: string, chatId?: string): Promise<ChatbotResponseType> => {
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

const status = async () => {
  try {
    const request = await Request.get(`${(url as string)}/status`);

    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
      detail: error,
    } as unknown as ChatbotStatusResponseType;
  }
};

const ChatbotService = {
  ask,
  status,
};

export default ChatbotService;
