'use client'

import React from 'react'
import styles from './paycode.module.css'

const SignIn = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Enter your gift code</h1>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="Gift Card Pin or Code" />
      </div>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="Zip Code" />
      </div>
      <div className={styles.changeWrap}>
        <div className={styles.plan}>
          <p className={styles.planName}>$6.99/month(pre-tax)</p>
          <p>Standard with ads</p>
        </div>
        <div className={styles.changeBtn}>Change</div>
      </div>
      <div className={styles.continueBtn}>Redeem Gift Code</div>
      <p className={styles.otherTips}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <a href="">Learn more.</a>
      </p>
    </div>
  )
}

export default SignIn
