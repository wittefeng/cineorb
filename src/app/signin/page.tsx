'use client'

import React, { useState } from 'react'
import styles from './signin.module.css'
import Image from 'next/image'

const SignIn = () => {
  const [blockC, setBlockC] = useState()
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="Enter Your Email or mobile number" />
      </div>
      <div className={styles.inputWrap}>
        <input type="password" placeholder="password" />
      </div>

      <div className={styles.dealWrap}>Forgot password?</div>
      <div className={styles.continueBtn}>CONTINUE</div>
      <p className={styles.otherTips}>
        Having trouble signing in or need assistance? Please contact us at
        <a href="">contact@cineorb.com</a>
      </p>
    </div>
  )
}

export default SignIn
