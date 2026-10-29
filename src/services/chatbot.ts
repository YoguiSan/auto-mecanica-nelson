import Config from '@amn/utils/config';
import Request from './request';
import { MessagesType } from '@amn/types/stores/chat';

const getBaseUrl = () => Config.CHANNEL_API_URL as string;

export type ChatbotResponseType = {
  chatId: string,
  answer: string,
  chatHistory: MessagesType[];
};

export type ChatbotHistoryResponseType = {
  chatId: string,
  chatHistory: MessagesType[];
};

export type ChatbotStatusResponseType = {
  status: 200 | 500,
  detail?: string,
};

const ask = async (query: string, chatId?: string): Promise<ChatbotResponseType> => {
  try {
    const request = await Request.get(`${getBaseUrl()}/ask`, {
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

const history = async (chatId: string): Promise<ChatbotHistoryResponseType> => {
  const response = await Request.get(`${getBaseUrl()}/history`, undefined, {
    chatId,
  }) as Partial<ChatbotHistoryResponseType>;

  if (!Array.isArray(response.chatHistory)) {
    throw new Error('Chat history response has an invalid format');
  }

  return response as ChatbotHistoryResponseType;
};

const status = async () => {
  try {
    const request = await Request.get(`${getBaseUrl()}`);

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
  history,
  status,
};

export default ChatbotService;
