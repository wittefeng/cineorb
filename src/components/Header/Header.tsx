'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
import {
  clearUserInfo,
  DefaultUserInfo,
  getUserInfo,
  IUserInfo
} from '@/utils/userinfo'
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userInfo, setUserInfo] = useState<IUserInfo>(DefaultUserInfo)

  useEffect(() => {
    const userInfoData = getUserInfo()
    console.log('userInfoData', userInfoData)

    if (userInfoData) {
      setUserInfo(userInfoData)
    } else {
      clearUserInfo()
    }
  }, [])

  const handleSearchClick = () => {
    window.location.href = '/category/' + inputValue
  }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
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
        {userInfo.user_token === '' ? (
          <Link href="/signin" className={styles.singIn}>
            Sign In
          </Link>
        ) : (
          <>
            <div className={styles.searchWrap}>
              <Image
                src="/search.png"
                alt="logo Logo"
                width={16}
                height={16}
                priority
              />
              <input
                placeholder="please enter"
                className={styles.searchInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
              />
              <div className={styles.searchBtn} onClick={handleSearchClick}>
                Search
              </div>
            </div>
            <div
              className={styles.headWrap}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                className={styles.headIcon}
                src={userInfo.user_logo}
                alt={''}
              />
              <span className={styles.nickName}>{userInfo.nickname}</span>
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
          </>
        )}
      </div>
    </header>
  )
}

export default Header
