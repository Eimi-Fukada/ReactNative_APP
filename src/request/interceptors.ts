import type { AxiosRequestConfig } from 'axios';
import type { RequestConfig } from './httpsRequest';

const urlArgsHandler = {
  request: {
    onFulfilled: (config: AxiosRequestConfig) => {
      const { url, args } = config as RequestConfig;
      if (url && args) {
        const lostParams: string[] = [];
        const replacedUrl = url.replace(
          /\{([^}]+)\}/g,
          (match, arg: string) => {
            if (!Object.prototype.hasOwnProperty.call(args, arg)) {
              lostParams.push(arg);
            }
            // 使用args中的参数替换URL中的占位符
            return args[arg] !== undefined ? String(args[arg]) : match;
          }
        );

        if (lostParams.length) {
          return Promise.reject(
            new Error(`在args中找不到对应的路径参数: ${lostParams.join(', ')}`)
          );
        }

        return {
          ...config,
          url: replacedUrl,
        };
      }

      return config;
    },
  },
};

export default urlArgsHandler;
