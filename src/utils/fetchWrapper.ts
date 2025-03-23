// utils/fetchWrapper.ts
import { getServerSession } from 'next-auth'
import { authOptions } from './authOptions' // 请根据实际情况调整路径

// 配置项接口
interface FetchConfig {
  baseUrl: string
  user_token?: string
}

// 封装的 fetch 函数
const fetchWrapper = async (
  url: string,
  options: RequestInit = {},
  config: FetchConfig
) => {
  const fullUrl = `${config.baseUrl}${url}`
  const headers = { ...options.headers } as Record<string, string>

  // 处理 token
  if (config.user_token) {
    if (typeof window === 'undefined') {
      // 服务端
      const session: any = await getServerSession(authOptions)
      if (session?.user?.token) {
        headers['Authorization'] = `Bearer ${session.user.token}`
      }
    } else {
      // 客户端
      const token = localStorage.getItem('token')
      if (token) {
        headers['Authorization'] = `Bearer ${token}`
      }
    }
  }

  const response = await fetch(fullUrl, {
    ...options,
    headers
  })

  if (!response.ok) {
    throw new Error(`请求失败: ${response.status}`)
  }

  return response.json()
}

export default fetchWrapper
