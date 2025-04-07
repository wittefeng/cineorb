'use client'
import React, { useRef } from 'react'
import styles from './signup.module.css'
import Image from 'next/image'
import { getRegisterData } from '@/services/apiService'
import { saveUserInfo } from '@/utils/userinfo'

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const captchaRef = useRef<HTMLInputElement>(null)

  const handleContinueClick = async () => {
    if (usernameRef.current && passwordRef.current && captchaRef.current) {
      const username = usernameRef.current.value
      const password = passwordRef.current.value
      const captcha = captchaRef.current.value

      console.log('username,password,captcha', username, password, captcha)
      const response = await getRegisterData(username, password, captcha)
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
      //     window.location.href = '/purchase'
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
      <h1 className={styles.title}>Join Cineorb</h1>
      <div className={styles.inputWrap}>
        <input
          type="text"
          placeholder="Enter Your Email or mobile number"
          ref={usernameRef}
        />
      </div>
      <div className={styles.inputWrap}>
        <input type="password" placeholder="Password" ref={passwordRef} />
      </div>
      <div className={styles.inputCodeWrap}>
        <div className={styles.inputWrap}>
          <input
            type="text"
            placeholder="Enter Verification Code"
            ref={captchaRef}
          />
        </div>
        <div className={styles.vCodeTipsWrap}>
          We've sent a verification captcha to your username. Please enter it
          below to complete your registration.
        </div>
      </div>
      <div className={styles.dealWrap}>
        <div className={styles.block}>
          <Image src="/block.png" alt="" width={20} height={20} />
        </div>
        <div className={styles.dealText}>
          Didn't receive the captcha? Resend in 60 seconds.
        </div>
      </div>
      <button className={styles.continueBtn} onClick={handleContinueClick}>
        CONTINUE
      </button>
      <p className={styles.otherTips}>
        Having trouble signing up or need assistance? Please contact us at
        <a>contact@cineorb.com.</a>
      </p>
    </div>
  )
}

export default SignUp
