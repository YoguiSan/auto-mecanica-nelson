type UnknownObject = {
  [key: string]: unknown;
};

type RequestType = {
  method: string;
  headers?: UnknownObject;
  params?: UnknownObject,
};

const request = async (url: string, {
  method,
  headers,
  params,
}: RequestType) => {
  let response;

  if (method.toLowerCase() === 'get') {
    const query = params
      ? Object.keys(params as UnknownObject)
        .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(String((params as UnknownObject)[key]))}`)
        .join('&')
      : '';

    const fullUrl = query ? `${url}?${query}` : url;

    response = await fetch(fullUrl, {
      method: 'GET',
      headers: (headers as HeadersInit),
    }).then((res) => res.json());
  } else {
    response = await fetch(url, {
      method: method.toUpperCase(),
      headers: (headers as HeadersInit),
      body: (params as unknown as BodyInit),
    }).then((res) => res.json());
  }

  return response;
};

const Get = async (url: string, params?: UnknownObject, headers?: UnknownObject) => request(url, {
  method: 'get',
  params,
  headers,
});

const PostPutDelete = async (
  url: string,
  method: string,
  body?: UnknownObject,
  headers?: UnknownObject,
) => request(url, {
  method,
  params: body,
  headers,
});

const Request = {
  get: async (url: string, params: UnknownObject, headers?: UnknownObject) => Get(url, params, headers),
  post: async (url: string, body: UnknownObject, headers?: UnknownObject) => PostPutDelete(url, 'post', body, headers),
  put: async (url: string, body: UnknownObject, headers?: UnknownObject) => PostPutDelete(url, 'put', body, headers),
  delete: async (url: string, body: UnknownObject, headers?: UnknownObject) => PostPutDelete(url, 'delete', body, headers),
  
};

export default Request;
