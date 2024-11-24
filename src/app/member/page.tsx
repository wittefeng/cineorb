'use client'

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Member = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>verify your creator identity</h1>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="your occupation" />
      </div>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="your institution" />
      </div>
      <p className={styles.otherTips}>
        Please upload any file to verify your identity, such as yourstudent lD,
        a link to one of your works, a work certificate, or anyother'relevant
        docment.
      </p>
      <div className={styles.uploadFilm}>
        <Image src={'/plus.png'} alt={''} width={24} height={24} />
      </div>
      <div className={styles.continueBtn}>SUBMIT</div>
      <p className={styles.otherTips}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <a href="">Learn more.</a>
      </p>
    </div>
  )
}

export default Member
