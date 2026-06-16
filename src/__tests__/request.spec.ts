import nock from 'nock';
import Request from '@amn/services/request';

describe('Request helper', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('sends GET requests with query params and parses JSON', async () => {
    const scope = nock('https://example.com')
      .get('/items')
      .query({ foo: 'bar' })
      .reply(200, { success: true });

    const result = await Request.get('https://example.com/items', { foo: 'bar' });

    expect(result).toEqual({ success: true });
    expect(scope.isDone()).toBe(true);
  });

  it('sends POST requests with a raw body and parses JSON', async () => {
    const payload = JSON.stringify({ answer: 42 });

    const scope = nock('https://example.com')
      .post('/items', payload)
      .reply(200, { success: true });

    const result = await Request.post('https://example.com/items', payload, {
      'content-type': 'application/json',
    });

    expect(result).toEqual({ success: true });
    expect(scope.isDone()).toBe(true);
  });
});
