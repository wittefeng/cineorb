'use client'

import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
import Video from '@/components/Video/Video'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import usePageWidthListener from '@/hook/usePageWidthListener'
import UserHead from '@/components/UserHead/UserHead'
import { getUserInfo } from '@/utils/userinfo'
import { getCollectionList } from '@/services/apiService'
export default function MyLibraryDetail() {
  const pageWidth = usePageWidthListener()
  const [videoWidth, setVideoWidth] = useState(1)

  useEffect(() => {
    if (pageWidth > 0) {
      let count = Math.floor((pageWidth * 0.95 - 20) / 4)

      if (pageWidth > 1278) {
        count = 1278 / 4 - 5
      }
      setVideoWidth(count)
    }
  }, [pageWidth])

  const [collectionList, setCollectionList] = useState([])
  const initData = async () => {
    const userInfoData = getUserInfo()
    if (userInfoData) {
      const res = await getCollectionList(userInfoData.user_token)
      console.log('res', res)
      if (res.code === 200) {
        setCollectionList(res.data.collection_list)
      } else {
        alert(res.msg)
      }
    } else {
      window.location.href = ''
    }
  }
  useEffect(() => {
    initData()
  }, [])

  return (
    <div className={styles.page}>
      <UserHead title={'My Library'} />

      <div className={styles.listWrap}>
        {collectionList.map((vItem: any, vIndex: number) => (
          <div className={styles.videoBox} key={vIndex}>
            <Video width={videoWidth} imageUrl={vItem.logo} id={vItem.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
