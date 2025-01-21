'use client'

import React, { useState } from 'react'
import styles from './purchase.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Purchase = () => {
  const [selectedPlan, setSelectedPlan] = useState(0)

  const handlePlanClick = (planIndex: number) => {
    setSelectedPlan(planIndex)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <h4>Choose your plan!</h4>
        <div className={styles.planList}>
          <div
            className={`${styles.itemWrap} ${
              selectedPlan === 0 ? styles.selected : ''
            }`}
            onClick={() => handlePlanClick(0)}
          >
            <Image
              className={styles.selectBg}
              src="/select-plan.png"
              alt="logo Logo"
              width={326}
              height={584}
              priority
            />
            <div className={styles.planItem}>
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
          </div>
          <div
            className={`${styles.itemWrap} ${
              selectedPlan === 1 ? styles.selected : ''
            }`}
            onClick={() => handlePlanClick(1)}
          >
            <Image
              className={styles.selectBg}
              src="/select-plan.png"
              alt="logo Logo"
              width={326}
              height={584}
              priority
            />
            <div className={styles.planItem}>
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
          </div>
          <div
            className={`${styles.itemWrap} ${
              selectedPlan === 2 ? styles.selected : ''
            }`}
            onClick={() => handlePlanClick(2)}
          >
            <Image
              className={styles.selectBg}
              src="/select-plan.png"
              alt="logo Logo"
              width={326}
              height={584}
              priority
            />
            <div className={styles.planItem}>
              <div className={styles.title}>Creator</div>
              <div className={styles.clause}>
                <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
                <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
                <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
                <p>1.a可能会有好多字，一行放得下吗一行放得下吗省略号省略号…</p>
              </div>
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
