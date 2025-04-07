'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Video from '@/components/Video/Video'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import usePageWidthListener from '@/hook/usePageWidthListener'
import UserHead from '@/components/UserHead/UserHead'
import { getUserInfo } from '@/utils/userinfo'
import { getCollectionList } from '@/services/apiService'
export default function MyLibrary() {
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
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/unlike.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>LIKED VIDEOS</span>
          </div>
          <Link
            href={'/mylibrarydetail/liked-video'}
            target={'_blank'}
            className={styles.titleRight}
          >
            SEE ALL
          </Link>
        </div>
        <div className={styles.listTop}>
          {collectionList.length > 4 ? (
            <Swiper
              className={styles.swiperContainer}
              modules={[Navigation]}
              spaceBetween={4}
              slidesPerView={4}
              slidesPerGroup={4}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              autoplay={{
                delay: 1000, // 设置自动切换的时间间隔，单位为毫秒，这里设置为3秒，可按需调整
                disableOnInteraction: false // 设置为false，表示用户交互（比如手动滑动后）后依然会自动播放，若为true则交互后停止自动播放
              }}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <div className={styles.customNavigation}>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
              {collectionList.map((vItem: any, vIndex: number) => (
                <SwiperSlide className={styles.swiperSlides} key={vIndex}>
                  <Video
                    width={videoWidth}
                    imageUrl={vItem.logo}
                    id={vItem.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            collectionList.map((vItem: any, vIndex: number) => (
              <div className={styles.videoBox} key={vIndex}>
                <Video width={videoWidth} imageUrl={vItem.logo} id={vItem.id} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/save-video.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>SAVED VIDEOS</span>
          </div>
          <Link
            href={'/category/kkk'}
            target={'_blank'}
            className={styles.titleRight}
          >
            SEE ALL
          </Link>
        </div>
        <div className={styles.listTop}>
          <Swiper
            className={styles.swiperContainer}
            modules={[Navigation]}
            spaceBetween={4}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            autoplay={{
              delay: 1000, // 设置自动切换的时间间隔，单位为毫秒，这里设置为3秒，可按需调整
              disableOnInteraction: false // 设置为false，表示用户交互（比如手动滑动后）后依然会自动播放，若为true则交互后停止自动播放
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className={styles.customNavigation}>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/watch-history.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>WATCH HISTORY</span>
          </div>
          <Link
            href={'/category/kkk'}
            target={'_blank'}
            className={styles.titleRight}
          >
            SEE ALL
          </Link>
        </div>
        <div className={styles.listTop}>
          <Swiper
            className={styles.swiperContainer}
            modules={[Navigation]}
            spaceBetween={4}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            autoplay={{
              delay: 1000, // 设置自动切换的时间间隔，单位为毫秒，这里设置为3秒，可按需调整
              disableOnInteraction: false // 设置为false，表示用户交互（比如手动滑动后）后依然会自动播放，若为true则交互后停止自动播放
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className={styles.customNavigation}>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/my-collection.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>MY FILM FESTIVAL COLLECTION</span>
          </div>
          <Link
            href={'/category/kkk'}
            target={'_blank'}
            className={styles.titleRight}
          >
            SEE ALL
          </Link>
        </div>
        <div className={styles.listTop}>
          <Swiper
            className={styles.swiperContainer}
            modules={[Navigation]}
            spaceBetween={4}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            autoplay={{
              delay: 1000, // 设置自动切换的时间间隔，单位为毫秒，这里设置为3秒，可按需调整
              disableOnInteraction: false // 设置为false，表示用户交互（比如手动滑动后）后依然会自动播放，若为true则交互后停止自动播放
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className={styles.customNavigation}>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} imageUrl={''} id={''} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
