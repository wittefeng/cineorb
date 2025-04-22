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
export const getVideoData = async (cat_id: any, user_token: string) => {
  console.log('cat_id', cat_id)
  return fetchWrapper(
    '/video' + `?user_token=${user_token}&id=${cat_id}`,
    { method: 'get' },
    { baseUrl }
  )
}
// 检查是否购买视频
export const checkBuyVideo = async (cat_id: any, user_token: string) => {
  console.log('cat_id', cat_id)
  return fetchWrapper(
    '/user-check' + `?user_token=${user_token}&id=${cat_id}`,
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

// 退出登录
export const logoutUser = async (user_token: string) => {
  return fetchWrapper(
    '/logout?user_token=' + user_token,
    { method: 'GET' },
    { baseUrl }
  )
}

// 用户收藏列表
export const getCollectionList = async (user_token: string) => {
  return fetchWrapper(
    '/collection-list?user_token=' + user_token,
    { method: 'GET' },
    { baseUrl }
  )
}
// 用户点赞列表
export const getLikeList = async (user_token: string) => {
  return fetchWrapper(
    '/like-list?user_token=' + user_token,
    { method: 'GET' },
    { baseUrl }
  )
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
// 用户信息
export const getUserInfoData = async (user_token: string) => {
  console.log('getUserInfoData user_token, ', user_token)
  return fetchWrapper(
    '/user-info?user_token=' + user_token,
    { method: 'GET' },
    { baseUrl }
  )
}

// 更新用户信息
export const updateUserInfoData = async (
  user_token: string,
  name: any,
  value: string
) => {
  return fetchWrapper(
    '/profile?user_token=' + user_token + `&${name}=` + value,
    {
      method: 'GET'
    },
    { baseUrl }
  )
}
// 更新用户信息
export const watching = async (
  user_token: string,
  lid: any,
  play_time: string
) => {
  return fetchWrapper(
    '/watching?user_token=' + user_token + `&lid=${lid}&play_time=` + play_time,
    {
      method: 'GET'
    },
    { baseUrl }
  )
}

// 上传文件
export const uploadData = async (user_token: string, formData: any) => {
  return fetchWrapper(
    '/upload?user_token=' + user_token,
    {
      method: 'POST',
      body: formData
    },
    { baseUrl }
  )
}

// 创作者申请
export const applyAuthentication = async (
  user_token: string,
  institution_name: string,
  position_name: string
) => {
  console.log(
    'user_token, institution_name, position_name',
    user_token,
    institution_name,
    position_name
  )
  return fetchWrapper(
    '/authentication?user_token=' +
      user_token +
      '&institution_name=' +
      institution_name +
      '&position_name=' +
      position_name,
    { method: 'GET' },
    { baseUrl }
  )
}
// 创作者申请
export const applyProfessional = async (user_token: string) => {
  console.log('user_token, ', user_token)
  return fetchWrapper(
    '/professional?user_token=' + user_token,
    { method: 'GET' },
    { baseUrl }
  )
}

// 创作者视频
export const getCreatorVideo = async (user_token: string) => {
  return fetchWrapper(
    '/creator-video?user_token=' + user_token,
    {
      method: 'GET'
    },
    { baseUrl }
  )
}
// 统计信息
export const getStatistical = async (user_token: string) => {
  return fetchWrapper(
    '/statistical?user_token=' + user_token,
    {
      method: 'GET'
    },
    { baseUrl }
  )
}
// 发布视频
export const publishVideo = async (
  user_token: string,
  title: string,
  subtitle: string,
  file_url: string,
  logoUrl: string,
  price: string
) => {
  return fetchWrapper(
    '/publish-video?user_token=' +
      user_token +
      '&title=' +
      title +
      '&subtitle=' +
      subtitle +
      '&file_url=' +
      file_url +
      '&file_url_360=' +
      file_url +
      '&file_url_480=' +
      file_url +
      '&file_url_720=' +
      file_url +
      `&logo=${logoUrl}&file_time=&price=${price}`,
    {
      method: 'GET'
    },
    { baseUrl }
  )
}
// 修改视频
type VideoModifyOptions = {
  title?: string
  subtitle?: string
  logo?: string
  file_url?: string
  file_url_360?: string
  file_url_480?: string
  file_url_720?: string
  file_time?: string
  is_list?: string
  price?: string
}
export const modifyVideo = async (
  userToken: string,
  id: string,
  options: VideoModifyOptions = {}
) => {
  const apiUrl = '/modify-video'
  const params = new URLSearchParams()
  params.append('user_token', userToken)
  params.append('id', id)

  for (const [key, value] of Object.entries(options)) {
    if (value !== undefined) {
      params.append(key, value)
    }
  }

  return fetchWrapper(
    `${apiUrl}?${params.toString()}`,
    {
      method: 'GET'
    },
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
