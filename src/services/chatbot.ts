import Config from '@amn/utils/config';
import Request from './request';

const ask = async (query: string, chatId?: string) => {
  const {
    SYSTEM_API_URL: url,
  } = Config;

  const request = await Request.get(url as string, {
    query,
  }, {
    chatId,
  });
};

const ChatbotService = {
  ask,
};

export default ChatbotService;
