'use client'
import React, { useState } from 'react'
import styles from './payment.module.css'
import Link from 'next/link'

const Payment = () => {
  // 状态来记录当前选中的按钮，初始化为null，表示都没选中
  const [selectedButton, setSelectedButton] = useState<any>(null)

  return (
    <div className={styles.wrap}>
      <h1>Choose Your Payment Method</h1>
      <div className={styles.tips}>
        <div>
          <strong>Easy Cancellations:</strong>
          Cancel online whenever you choose, hassle-free.
        </div>
        <div>
          <strong>Flexible Payment Options:</strong>
          Change your payment method anytime to suit your needs.
        </div>
        <div>
          <strong>Secure Encryption:</strong>
          Your payment information is fully protected with advanced encryption.
        </div>
      </div>
      {/* 为每个按钮添加点击事件处理函数，点击时设置选中的按钮 */}
      <div
        className={`${styles.btn} ${
          selectedButton === 'Credit/Debit Card' ? styles.btnSelect : ''
        }`}
        onClick={() => setSelectedButton('Credit/Debit Card')}
      >
        Credit/Debit Card
      </div>
      <div
        className={`${styles.btn} ${
          selectedButton === 'Paypal' ? styles.btnSelect : ''
        }`}
        onClick={() => setSelectedButton('Paypal')}
      >
        Paypal
      </div>
      <div
        className={`${styles.btn} ${
          selectedButton === 'Promo or Gift Code' ? styles.btnSelect : ''
        }`}
        onClick={() => setSelectedButton('Promo or Gift Code')}
      >
        Promo or Gift Code
      </div>
      {/* 根据是否有选中的按钮来决定Link是否可点击，通过添加或移除相应的样式类来控制外观和交互 */}
      <Link
        href="/card"
        className={`${styles.btn} ${styles.btnC} ${
          selectedButton ? '' : styles.btnCDisabled
        }`}
      >
        CONTINUE
      </Link>
    </div>
  )
}

export default Payment
