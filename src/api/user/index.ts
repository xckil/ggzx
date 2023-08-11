/**
 * 用户接口实现
 */

// 统一管理用户相关接口
import { LoginFormData, LoginResponseData, userInfoResponseData } from './type'

import request from '@/utils/request'

// 路由请求地址
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

//登录接口实现
export const reqLogin = (data: LoginFormData) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)

// 用户信息获取
export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)

// 推出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
