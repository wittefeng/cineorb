import React from 'react'
import styles from './topTag.module.css'

const TopTag = ({ number }: any) => {
  return (
    <div className={styles.topTag}>
      <div>TOP</div>
      <div>{number}</div>
    </div>
  )
}

export default TopTag
