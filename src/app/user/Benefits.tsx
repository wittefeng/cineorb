'use client'
import React from 'react'
import styles from './page.module.css'
const Benefits = () => {
  return (
    <div className={styles.benefitsContent}>
      <div className={styles.title}>Introduction to Upgrade Benefits</div>
      <div className={styles.benefitsMsg}>
        <p>
          介绍升级的权益 介绍升级的权益巴拉巴拉， 显示 锁定icon和 “Upgrade to
        </p>
        <p>Pro to access advanced video analytics”.</p>
        <p>
          介绍升级的权益巴拉巴拉对付费创作人用户： 介绍升级的权益巴拉巴拉Views:
        </p>
        <p>
          #视频浏览数 介绍升级的权益巴拉巴拉Watch Time: 总观看时长、平均观看时长
        </p>
        <p>介绍升级的权益巴拉巴拉Engagement: 点赞数、分享数</p>
        <p>介绍升级的权益巴拉巴拉Demographics: 观众地区、年龄、设备等</p>
      </div>
      <div className={styles.benefitsMsg}>
        <p>
          介绍升级的权益 介绍升级的权益巴拉巴拉， 显示 锁定icon和 “Upgrade to
        </p>
      </div>
      <div className={styles.benefitsBtnWrap}>
        <div className={styles.benefitsBtn}>upgrade to pro</div>
      </div>
    </div>
  )
}

export default Benefits
