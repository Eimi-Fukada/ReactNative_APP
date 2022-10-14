import React from 'react';

/**
 * 路由名称映射表,
 * 请保证对象值唯一
 */
export const routeNames = {
  Home: '/pages/home/index',
  Welcome: '/pages/welcome/index',
  Mine: '/pages/mine/index',
  Template: '/pages/template/index',
};

/**
 * 定义screen传递的参数
 */
export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Mine: undefined;
};

export type RouteNameType = keyof typeof routeNames;

export interface RouteMapDTO {
  name: string;
  component: React.ComponentType<any>;
}
