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
            <Image
              src="/wecom-temp.png"
              alt="logo Logo"
              width={102}
              height={25}
              priority
            />
            <Link href="/" className={styles.shop}>
              Shop
            </Link>
          </div>
        </div>
        <Link href="/signin" className={styles.singIn}>
          Sign In
        </Link>
      </div>
    </header>
  )
}

export default Header
