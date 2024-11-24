import React from 'react'

import styles from './UserHead.module.css'

interface IProps {
  title: string
}
const UserHead = (props: IProps) => {
  const { title } = props
  return (
    <>
      <div className={styles.headTitle}>{title}</div>
      <div className={styles.headTitleLine}></div>
    </>
  )
}

export default UserHead
