const isDevelopment = process.env.NODE_ENV === 'development';

export const baseURL = isDevelopment
  ? 'http://8.219.56.97:8083'
  : 'http://8.219.56.97:8083';

/**
 * 系统版本
 */
export const version = '1.0.0';
