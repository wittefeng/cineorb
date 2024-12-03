import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
const Header = () => {
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
            <Link href="/" className={styles.shop}>
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
        <Link href="/user" className={styles.headWrap}>
          <img
            className={styles.headIcon}
            src={
              'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
            }
            alt={''}
          />
          <span className={styles.nickName}>Nickname</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
