// services/apiService.ts
import fetchWrapper from '../utils/fetchWrapper'

// 配置域名
const baseUrl = 'http://cineorbht.huizhirh.com'

// 服务端不带 token 的请求/获取首页配置
export const getIndexData = async () => {
  return fetchWrapper('/index', { method: 'GET' }, { baseUrl })
}
// 获取分类
export const getCategoryData = async () => {
  return fetchWrapper('/category', { method: 'GET' }, { baseUrl })
}
// 获取分类推荐
export const getLibraryData = async () => {
  return fetchWrapper('/library', { method: 'GET' }, { baseUrl })
}
// detail指定分类下视频列表页 detail cat_id
export const getDetailData = async (cat_id: any) => {
  return fetchWrapper(
    '/detail' + '?cat_id=' + cat_id,
    { method: 'GET' },
    { baseUrl }
  )
}
// video详情页 detail cat_id
export const getVideoData = async (cat_id: any) => {
  console.log('cat_id', cat_id)
  return fetchWrapper(
    '/video' + '?id=' + cat_id,
    { method: 'get' },
    { baseUrl }
  )
}
// 注册
export const getRegisterData = async (
  username: string,
  password: string,
  captcha: string
) => {
  console.log('username, password, captcha', username, password, captcha)
  return fetchWrapper(
    '/register?username=' +
      username +
      '&password=' +
      password +
      '&captcha=' +
      captcha,
    { method: 'GET' },
    { baseUrl }
  )
}
// 登录
export const getLoginData = async (username: string, password: string) => {
  console.log('username, password', username, password)
  return fetchWrapper(
    '/login?username=' + username + '&password=' + password,
    { method: 'GET' },
    { baseUrl }
  )
}
// 检查用户是否是登录状态

export const checkUserLoginStatus = async (user_token: string) => {
  return fetchWrapper('/check', { method: 'GET' }, { baseUrl, user_token })
}

// 点赞
export const sendLikeData = async (user_token: string, vid: string) => {
  console.log(' user_token, vid', user_token, vid)
  return fetchWrapper(
    '/send-like?user_token=' + user_token + '&vid=' + vid,
    { method: 'GET' },
    { baseUrl }
  )
}

// 收藏
export const sendCollectionData = async (user_token: string, vid: string) => {
  console.log(' user_token, vid', user_token, vid)
  return fetchWrapper(
    '/send-collection?user_token=' + user_token + '&vid=' + vid,
    { method: 'GET' },
    { baseUrl }
  )
}
// // 服务端带 token 的请求
// export const getPrivateData = async () => {
//   return fetchWrapper(
//     '/private-data',
//     { method: 'GET' },
//     { baseUrl, withToken: true }
//   )
// }

// // 客户端不带 token 的请求
// export const postPublicData = async (data: any) => {
//   return fetchWrapper(
//     '/public-data',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     },
//     { baseUrl }
//   )
// }

// // 客户端带 token 的请求
// export const postPrivateData = async (data: any) => {
//   return fetchWrapper(
//     '/private-data',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     },
//     { baseUrl, withToken: true }
//   )
// }
