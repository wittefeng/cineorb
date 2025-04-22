'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { DefaultUserInfo, getUserInfo, IUserInfo } from '@/utils/userinfo'
import { applyAuthentication } from '@/services/apiService'

const Benefits = () => {
  const [institutionName, setInstitutionName] = useState('')
  const [positionName, setPositionName] = useState('')
  const [userInfo, setUserInfo] = useState<IUserInfo>(DefaultUserInfo)

  useEffect(() => {
    const userInfoData = getUserInfo()
    if (userInfoData) {
      console.log('userInfoData', userInfoData)
      setUserInfo(userInfoData)
    }
  }, [])
  const handleUpgrade = async () => {
    try {
      const response = await applyAuthentication(
        userInfo.user_token,
        institutionName,
        positionName
      )
      console.log('response', response)
      if (response.code !== 200) {
        alert(response.msg)
      } else {
        alert(response.msg)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className={styles.benefitsContent}>
      {userInfo && userInfo.is_creator === 0 ? (
        <>
          <div className={styles.title}>Introduction to Upgrade Benefits</div>
          <div className={styles.benefitsMsg}>
            <p>创作者申请</p>
          </div>
          <div className={styles.benefitsMsg}>
            <div className={styles.filmInfoItem}>
              <div className={styles.filmInfoLabel}>机构名称</div>
              <input
                className={styles.filmInfoInput}
                placeholder="Enter message"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
              />
            </div>
            <div className={styles.filmInfoItem}>
              <div className={styles.filmInfoLabel}>职位名称</div>
              <input
                className={styles.filmInfoInput}
                placeholder="Enter message"
                value={positionName}
                onChange={(e) => setPositionName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.benefitsBtnWrap}>
            <div className={styles.benefitsBtn} onClick={handleUpgrade}>
              upgrade to pro
            </div>
          </div>
        </>
      ) : userInfo.is_creator === 2 ? (
        <div>创作者申请正在审核中</div>
      ) : (
        <div>你是创作者</div>
      )}
    </div>
  )
}

export default Benefits
