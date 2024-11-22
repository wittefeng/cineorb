'use client'

import React from 'react'
import styles from './purchase.module.css'
import Link from 'next/link'

const Purchase = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <h4>Choose your plan!</h4>
        <div className={styles.planList}>
          <div>
            <div className={styles.title}>
              <p>Fre</p>
              <p>e</p>
            </div>
            <div className={styles.clause}>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
            </div>
          </div>
          <div>
            <div className={styles.title}>
              <p>Subscribe</p>
              <p>9.99/month</p>
            </div>

            <div className={styles.clause}>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
            </div>
          </div>
          <div>
            <div className={styles.title}>Creator</div>

            <div className={styles.clause}>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
            </div>
          </div>
        </div>

        <Link href="/payment" className={styles.ContinueBtn}>
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Purchase
