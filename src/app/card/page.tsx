'use client'

import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Set up your credit or debit card</h1>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="Enter Your Email or mobile number" />

        <Image
          className={styles.inputIcon}
          src="/card.png"
          alt=""
          width={24}
          height={24}
        />
      </div>
      <div className={styles.inputTWrap}>
        <div className={styles.inputWrap}>
          <input type="text" placeholder="Expiration..." />
        </div>
        <div className={styles.inputWrap}>
          <input type="text" placeholder="cvv" />
          <Image
            className={styles.inputIcon}
            src="/cvv.png"
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={styles.inputWrap}>
        <input type="password" placeholder="Password" />
      </div>
      <div className={styles.inputWrap}>
        <input type="password" placeholder="ZIP code" />
      </div>

      <Link className={styles.continueBtn} href={'/payplan'}>
        Pay Now
      </Link>
    </div>
  )
}

export default SignIn
