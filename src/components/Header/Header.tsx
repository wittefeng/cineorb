'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <header className={styles.headerContainer}>
      <div
        className={styles.header}
        
      >
        <div className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="logo Logo"
            width={80}
            height={80}
            priority
          />
          <div className={styles.logoRight}>
            <Link href="/home" className={styles.shop}>
              <Image
                src="/wecom-temp.png"
                alt="logo Logo"
                width={102}
                height={25}
                priority
              />
            </Link>

            <Link href="/" className={styles.shop}>
              Shop
            </Link>
          </div>
        </div>
        <Link href="/signin" className={styles.singIn}>
          Sign In
        </Link>
        <div className={styles.headWrap} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img
            className={styles.headIcon}
            src={
              'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
            }
            alt={''}
          />
          <span className={styles.nickName}>Nickname</span>
        </div>
        {/* 下拉菜单部分，根据状态决定是否显示 */}
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            <Link href="/mylibrary" className={styles.dropdownItem}>
              My Library
            </Link>
            <Link href="/setting" className={styles.dropdownItem}>
              Setting
            </Link>
            <Link href="/user" className={styles.dropdownItem}>
              Creator Center
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
