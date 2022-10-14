declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare module '@react-native-community/blur';

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'mini' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt';
    [key: string]: any;
  };
};
