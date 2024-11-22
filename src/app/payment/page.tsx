'use client'

import React from 'react'
import styles from './payment.module.css'
import Link from 'next/link'
const Payment = () => {
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
      <div className={styles.btn}>Credit/Debit Card</div>
      <div className={styles.btn}>Paypal</div>
      <div className={styles.btn}>Promo or Gift Code</div>
      <Link href="/card" className={styles.btn + ' ' + styles.btnC}>
        CONTINUE
      </Link>
    </div>
  )
}

export default Payment
