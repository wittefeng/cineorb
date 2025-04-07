'use client'

import React, { useRef } from 'react'
import styles from './signin.module.css'
import { getLoginData } from '@/services/apiService'
import { saveUserInfo } from '@/utils/userinfo'

const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleContinueClick = async () => {
    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value
      const password = passwordRef.current.value

      console.log('username,password,captcha', username, password)
      const response = await getLoginData(username, password)
      console.log('response', response)
      if (response.code === 200) {
        saveUserInfo(response.data)
        setTimeout(() => {
          window.location.href = '/home'
        }, 300)
      } else {
        alert(response.msg)
      }
      // try {
      //   const response = await fetch('YOUR_API_URL', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       username,
      //       password,
      //       captcha
      //     })
      //   })

      //   if (response.ok) {
      //     window.location.href = '/home'
      //   } else {
      //     console.error('请求失败:', response.statusText)
      //   }
      // } catch (error) {
      //   console.error('网络错误:', error)
      // }
    }
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.inputWrap}>
        <input
          type="text"
          placeholder="Enter Your Email or mobile number"
          ref={usernameRef}
        />
      </div>
      <div className={styles.inputWrap}>
        <input type="password" placeholder="password" ref={passwordRef} />
      </div>

      <div className={styles.dealWrap}>Forgot password?</div>
      <button className={styles.continueBtn} onClick={handleContinueClick}>
        CONTINUE
      </button>
      <p className={styles.otherTips}>
        Having trouble signing in or need assistance? Please contact us at
        <a href="">contact@cineorb.com</a>
      </p>
    </div>
  )
}

export default SignIn
