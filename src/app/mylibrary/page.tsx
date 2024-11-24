'use client'

import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Video from '@/components/Video/Video'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import UserHead from '@/components/UserHead/UserHead'
export default function MyLibrary() {
  return (
    <div className={styles.page}>
      <UserHead title={'My Library'} />
      <div className={styles.listWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/type-top.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>LIKED VIDEOS</span>
          </div>
        </div>
        <div className={styles.listTop}>
          <Video width={289} />
          <Video width={289} />
          <Video width={289} />
          <Video width={289} />
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/type-top.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>LIKED VIDEOS</span>
          </div>
        </div>
        <div className={styles.listTop}>
          <Video width={289} />
          <Video width={289} />
          <Video width={289} />
          <Video width={289} />
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/type-top.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>LIKED VIDEOS</span>
          </div>
        </div>
        <div className={styles.listTop}>
          <Video width={289} />
          <Video width={289} />
          <Video width={289} />
          <Video width={289} />
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/type-top.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>LIKED VIDEOS</span>
          </div>
        </div>
        <div className={styles.listTop}>
          <Image
            className={styles.titleIcon}
            src={'/test-image.png'}
            alt={''}
            width={312}
            height={162}
          />
          <Image
            className={styles.titleIcon}
            src={'/test-image.png'}
            alt={''}
            width={312}
            height={162}
          />
          <Image
            className={styles.titleIcon}
            src={'/test-image.png'}
            alt={''}
            width={312}
            height={162}
          />
          <Image
            className={styles.titleIcon}
            src={'/test-image.png'}
            alt={''}
            width={312}
            height={162}
          />
        </div>
      </div>
    </div>
  )
}
