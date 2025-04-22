'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { applyProfessional, getStatistical } from '@/services/apiService'
import { IUserInfo, DefaultUserInfo, getUserInfo } from '@/utils/userinfo'
const VideoAnalytics = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(DefaultUserInfo)
  const [data, setData] = useState<any>()

  const getData = async (user_token: string) => {
    const res = await getStatistical(user_token)
    console.log('res', res)
    setData(res.data)
  }

  useEffect(() => {
    const userInfoData = getUserInfo()
    if (userInfoData) {
      getData(userInfoData.user_token)
      setUserInfo(userInfoData)
    }
  }, [])
  const handleUpgrade = async () => {
    try {
      const response = await applyProfessional(userInfo.user_token)
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
      {userInfo.is_vip === 1 ? (
        <>
          <div className={styles.title}>Video Analytics (Pro Feature)</div>
          {data && (
            <>
              <div className={styles.benefitsMsg}>
                <p>视频数量:{data.all.userVideoCount}</p>
                <p>视频长度:{data.all.userVideoDuration}</p>
                <p>视频收藏:{data.all.userVideoDuration}</p>
                <p>视频点赞:{data.all.userCollectionCount}</p>
              </div>
              <div className={styles.videoManagementList}>
                {data.video.map((item: any, index: number) => (
                  <div key={index} className={styles.itemWrap}>
                    <img
                      width={212}
                      height={120}
                      src={item.videoInfo.logo}
                      id={item.videoInfo.cat_id}
                      style={{ objectFit: 'cover' }}
                    />

                    <div className={styles.dataInfo}>
                      <p>点赞数：{item.videoLikeCount}</p>
                      <p>收藏数：{item.videoCollectionCount}</p>
                      <p>播放时长：{item.videoDuration}s</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      ) : userInfo.is_creator === 2 ? (
        <div>专业版申请正在审核中</div>
      ) : (
        <>
          <div>您还不是专业版</div>
          <div className={styles.benefitsBtnWrap}>
            <div className={styles.benefitsBtn} onClick={handleUpgrade}>
              upgrade to pro
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default VideoAnalytics
