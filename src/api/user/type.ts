/**
 * 定义接口类型
 */

/**
 * 登录接口数据类型基类
 * @param username
 * @param password
 */
export interface LoginFormData {
  username?: string
  password?: string
}

/**
 * 登录接口响应数据基类
 */
export interface ResponseData {
  code?: number
  message?: string
  ok?: boolean
}

/**
 * 登录响应数据接口
 */
export interface LoginResponseData extends ResponseData {
  data?: string
}

/**
 * 用户响应信息接口
 */
export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
