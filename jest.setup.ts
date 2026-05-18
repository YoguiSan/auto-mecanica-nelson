import '@testing-library/jest-dom';
import fetch from 'node-fetch';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var fetch: any;
}

global.fetch = fetch;
