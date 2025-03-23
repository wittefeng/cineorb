// 定义一个 Cookie 工具类，用于在浏览器环境下操作 cookies
class BrowserCookieUtil {
  // 设置 cookie 的方法
  static set(name: string, value: string, days?: number): void {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = `; expires=${date.toUTCString()}`
    }
    document.cookie = `${name}=${value}${expires}; path=/`
  }

  // 获取 cookie 的方法
  static get(name: string): string | null {
    const nameEQ = `${name}=`
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim()
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length)
      }
    }
    return null
  }

  // 清除 cookie 的方法
  static clear(name: string): void {
    this.set(name, '', -1)
  }
}

// // 使用示例
// BrowserCookieUtil.set('token', 'abc123', 7);
// const token = BrowserCookieUtil.get('token');
// console.log(token);
// BrowserCookieUtil.clear('token');

const cookieName = 'cineorb_user_token'
const localStorageName = 'cineorb_user_info'
// 保存用户信息到 cookie 和 localStorage
function saveUserInfo(userInfo: {
  id: number
  user_token: string
  username: string
  nickname: string
  user_logo: string
  is_creator: number
  is_vip: number
  vip_datetime: string
}): void {
  console.log('保存用户信息', userInfo)
  // 保存 token 到 cookie
  const token = userInfo.user_token
  const expirationDays = 30
  const date = new Date()
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${cookieName}=${token};${expires};path=/`

  // 复制用户信息对象，避免修改原始对象
  // const { user_token, ...otherInfo } = userInfo
  const { ...otherInfo } = userInfo

  // 保存其他信息到 localStorage
  localStorage.setItem(localStorageName, JSON.stringify(otherInfo))
}

// 清除用户信息
function clearUserInfo(): void {
  // 清除 cookie
  BrowserCookieUtil.clear('cineorb_user_token')

  // 清除 localStorage
  localStorage.removeItem(localStorageName)
}
export interface IUserInfo {
  id: number
  user_token: string
  username: string
  nickname: string
  user_logo: string
  is_creator: number
  is_vip: number
  vip_datetime: string
}
// 获取用户信息
function getUserInfo(): IUserInfo | null {
  // 从 cookie 中获取 user_token
  const name = cookieName + '='
  const ca = document.cookie.split(';')
  let userToken = ''
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      userToken = c.substring(name.length, c.length)
      break
    }
  }

  // 从 localStorage 中获取其他用户信息
  const otherInfoStr = localStorage.getItem(localStorageName)
  if (!userToken || !otherInfoStr) {
    return null
  }
  const otherInfo = JSON.parse(otherInfoStr)

  // 合并 token 和其他信息
  const userInfo = {
    ...otherInfo,
    user_token: userToken
  }

  return userInfo as {
    id: number
    user_token: string
    username: string
    nickname: string
    user_logo: string
    is_creator: number
    is_vip: number
    vip_datetime: string
  }
}
// 示例用法
export const DefaultUserInfo: IUserInfo = {
  id: -1,
  user_token: '',
  username: 'x',
  nickname: 'x',
  user_logo: '',
  is_creator: 0,
  is_vip: 0,
  vip_datetime: ''
}

// 保存用户信息
// saveUserInfo(userInfo)

// 清除用户信息
// clearUserInfo();

export { saveUserInfo, getUserInfo, clearUserInfo }
