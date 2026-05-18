import nock from 'nock';
import Config from '@amn/utils/config';
import ChatbotService from '@amn/services/chatbot';

describe('ChatbotService', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('calls the configured channel API endpoint and returns structured data', async () => {
    Config.CHANNEL_API_URL = 'https://api.example.com';

    const scope = nock('https://api.example.com')
      .get('/ask')
      .query({ query: 'hello' })
      .reply(200, {
        chatId: '123',
        answer: 'Hi there',
        chatHistory: [],
      });

    const response = await ChatbotService.ask('hello', '123');

    expect(response).toEqual({
      chatId: '123',
      answer: 'Hi there',
      chatHistory: [],
    });
    expect(scope.isDone()).toBe(true);
  });
});
