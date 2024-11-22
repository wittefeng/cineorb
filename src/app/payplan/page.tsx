'use client'

import React from 'react'
import styles from './payplan.module.css'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Set up your PayPal</h1>

      <div className={styles.inputWrap}>
        <div className={styles.plan}>
          <p className={styles.planName}>$6.99/month(pre-tax)</p>
          <p>Standard with ads</p>
        </div>
        <div className={styles.changeBtn}>Change</div>
      </div>
      <p className={styles.otherTips}>
        To finish signup, click the <strong>Continue to PayPal</strong> button
        and login to PayPal using your email and password.
      </p>
      <Link className={styles.continueBtn} href={'/paycode'}>
        Pay Now
      </Link>
    </div>
  )
}

export default SignIn
