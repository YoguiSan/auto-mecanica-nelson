type ConfigType = {
  SYSTEM_API_URL: string;
};

const Config = {
  SYSTEM_API_URL: process.env.NEXT_PUBLIC_SYSTEM_API_URL,
};

export default Config;

