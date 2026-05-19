import React from 'react';

const mock = 'test-file-stub';
export default mock;
export const ReactComponent = (props: any) => {
  const { alt = '', ...rest } = props || {};
  return React.createElement('img', { alt, ...rest });
};
