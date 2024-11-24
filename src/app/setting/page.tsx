'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import UserHead from '@/components/UserHead/UserHead'
export default function () {
  // 定义当前选中的 tab，初始值是 1
  const [activeTab, setActiveTab] = useState<number>(0)

  // 左侧 Tab 列表 (固定数据)
  const tabs = [
    {
      id: 1,
      label: (
        <>
          <Image
            className={styles.chartsIcon}
            src={'/setting-plan.png'}
            alt={''}
            width={14}
            height={18}
          />
          <span className={styles.tabText}>Your</span>
        </>
      )
    },
    {
      id: 2,
      label: (
        <>
          <Image
            className={styles.chartsIcon}
            src={'/setting-billing.png'}
            alt={''}
            width={14}
            height={18}
          />
          <span className={styles.tabText}>Billing</span>
        </>
      )
    }
  ]

  // 右侧 Tab 内容 (固定数据)
  const tabContents: any = {
    0: (
      <div>
        <div className={styles.itemWrap}>
          <div className={styles.itemLeft}>
            <img
              className={styles.headIcon}
              src={
                'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
              }
              alt={''}
            />
            <span className={styles.tabText}>Upload your profile photo</span>
          </div>
          <div className={styles.btn}>Upload photo</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>Email</div>
            <div className={styles.leftSubText}>Email@XXX.com</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>phone number</div>
            <div className={styles.leftSubText}>123132132</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>name</div>
            <div className={styles.leftSubText}>zhang san</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>birthday</div>
            <div className={styles.leftSubText}>2000 01 01</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>address</div>
            <div className={styles.leftSubText}>XXXX</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
      </div>
    ),
    1: (
      <div>
        <h2>这是 Tab 1 的内容</h2>
        <div>这里是 Tab 1 的详细内容。</div>
      </div>
    ),
    2: (
      <div>
        <h2>这是 Tab 2 的内容</h2>
        <div>这里是 Tab 2 的详细内容。</div>
      </div>
    )
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
            <div
              className={`${styles.tab} ${styles.tabHead} ${
                0 === activeTab ? styles.active : ''
              }`}
              onClick={() => handleTabClick(0)}
            >
              <img
                className={styles.headIcon}
                src={
                  'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
                }
                alt={''}
              />
              <span className={styles.tabText}>Account</span>
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
            <div className={`${styles.tab} `} onClick={() => alert('logout')}>
              <>
                <Image
                  className={styles.chartsIcon}
                  src={'/setting-logout.png'}
                  alt={''}
                  width={14}
                  height={18}
                />
                <span className={styles.tabText}>logout</span>
              </>
            </div>
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
