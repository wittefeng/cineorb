// utils/authOptions.ts
import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

// 定义 authOptions 对象
export const authOptions: AuthOptions = {
  // 配置认证提供商
  providers: [
    // Google OAuth 提供商
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    // 自定义凭证提供商
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // 这里可以添加自定义的验证逻辑，例如查询数据库验证用户名和密码
        if (
          credentials?.username === 'admin' &&
          credentials?.password === 'password'
        ) {
          return { id: '1', name: 'Admin User' }
        }
        return null
      }
    })
  ],
  // 配置会话管理
  session: {
    strategy: 'jwt' // 使用 JWT 策略管理会话
  },
  // 配置 JWT 相关选项
  jwt: {
    secret: process.env.JWT_SECRET
  },
  // 自定义回调函数
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }: any) {
      session.user.id = token.id as string
      return session
    }
  }
}

export default NextAuth(authOptions)
