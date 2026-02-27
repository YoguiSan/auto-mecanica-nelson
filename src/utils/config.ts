type ConfigType = {
  CHANNEL_API_URL: string;
};

const Config = {
  CHANNEL_API_URL: process.env.NEXT_PUBLIC_CHANNEL_API_URL,
};

export default Config;

