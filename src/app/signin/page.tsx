'use client'

import React from 'react'
import styles from './signin.module.css'

const SignIn = () => {
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