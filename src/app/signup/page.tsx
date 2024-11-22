'use client'

import React from 'react'
import styles from './signup.module.css'
import Image from 'next/image'

const SignIn = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Join Cineorb</h1>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="Enter Your Email or mobile number" />
      </div>
      <div className={styles.inputWrap}>
        <input type="password" placeholder="Password" />
      </div>
      <div className={styles.inputCodeWrap}>
        <div className={styles.inputWrap}>
          <input type="text" placeholder="Enter Verification Code" />
        </div>
        <div className={styles.vCodeTipsWrap}>
          We've sent a verification code to your email. Please enter it below to
          complete your registration.
        </div>
      </div>
      <div className={styles.dealWrap}>
        <div className={styles.block}>
          <Image src="/block.png" alt="" width={20} height={20} />
        </div>

        <div className={styles.dealText}>
          Didn't receive the code? Resend in 60 seconds.
        </div>
      </div>
      <div className={styles.continueBtn}>CONTINUE</div>
      <p className={styles.otherTips}>
        Having trouble signing up or need assistance? Please contact us at
        <a>contact@cineorb.com.</a>
      </p>
    </div>
  )
}

export default SignIn
