import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.as}>
        <Link href="/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </Link>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms Of Use
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help
        </a>

        <Link href="/company" target="_blank" rel="noopener noreferrer">
          Company
        </Link>
      </div>
      <div className={styles.tips}>
        效果图上的文字和图片仅供客户预览效果使用，非商用Co., Ltd
      </div>
    </footer>
  )
}

export default Footer
