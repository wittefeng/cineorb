'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import UserHead from '@/components/UserHead/UserHead'
import Image from 'next/image'
import UploadVideo from './UploadVideo'
import VideoManagement from './VideoManagement'
import Benefits from './Benefits'
import VideoAnalytics from './VideoAnalytics'
import DIYM from './DIYM'
export default function () {
  // 定义当前选中的 tab，初始值是 1
  const [activeTab, setActiveTab] = useState<number>(4)

  // 左侧 Tab 列表 (固定数据)
  const tabs = [
    {
      id: 1,
      label: (
        <>
          <Image src={'/upload-video.png'} alt={''} width={24} height={24} />
          <span className={styles.tabText}>Upload Video</span>
        </>
      )
    },
    {
      id: 2,
      label: (
        <>
          <Image
            src={'/video-management.png'}
            alt={''}
            width={24}
            height={24}
          />
          <span className={styles.tabText}>Video Management</span>
        </>
      )
    },
    {
      id: 3,
      label: (
        <>
          <Image src={'/upgrade-to-pro.png'} alt={''} width={24} height={24} />
          <span className={styles.tabText}>Upgrade to Pro</span>
        </>
      )
    },
    {
      id: 4,
      label: (
        <>
          <Image src={'/video-analytics.png'} alt={''} width={18} height={18} />
          <span className={styles.tabText}>
            Video Analytics <br />
            (Pro Feature)
          </span>
        </>
      )
    },
    {
      id: 5,
      label: (
        <>
          <Image src={'/diy-merchandise.png'} alt={''} width={18} height={18} />
          <span className={styles.tabText}>
            DIY Merchandise <br />
            (Pro Feature)
          </span>
        </>
      )
    }
  ]

  // 右侧 Tab 内容 (固定数据)
  const tabContents: any = {
    1: <UploadVideo />,
    2: <VideoManagement />,
    3: <Benefits />,
    4: <VideoAnalytics />,
    5: <DIYM />
  }

  // 切换 Tab 的事件处理函数
  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId)
  }

  return (
    <div className={styles.wrap}>
      <UserHead title={'My Account'} />
      <div className={styles.contentWrap}>
        <div className={styles.contentBox}>
          <div className={styles.sidebar}>
            {/* 渲染左侧导航栏的 Tabs */}
            <div className={styles.accountInfo}>
              <img
                className={styles.headIcon}
                src={
                  'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
                }
                alt={''}
              />
              <span className={styles.accountName}>Account name</span>
              <span className={styles.accountResume}>
                public-facing bio, highlighting their expertise, filmmaking
                journey, and interests.
              </span>
            </div>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${styles.tab} ${
                  tab.id === activeTab ? styles.active : ''
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>
          <div className={styles.content}>
            {/* 渲染右侧内容，根据 activeTab 来决定显示哪一部分 */}
            <div className={styles.tabContent}>{tabContents[activeTab]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
