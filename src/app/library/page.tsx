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
export default function Library() {
  return (
    <div className={styles.page}>
      <div>
        <div className={styles.first}>
          <div>
            <Video />
            <Image
              className={styles.chartsIcon}
              src={'/charts-1.png'}
              alt={''}
              width={80}
              height={50}
            />
          </div>
        </div>
        <div className={styles.ts}>
          <div>
            <Video />
            <Image
              className={styles.chartsIcon}
              src={'/charts-2.png'}
              alt={''}
              width={80}
              height={50}
            />
          </div>
          <div>
            <Video />
            <Image
              className={styles.chartsIcon}
              src={'/charts-3.png'}
              alt={''}
              width={80}
              height={50}
            />
          </div>
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
            <span>TOP RATED</span>
          </div>
          <div className={styles.titleRight}>SEE ALL</div>
        </div>
        <div className={styles.listTop}>
          <Video width={246} />
          <Video width={246} />
          <Video width={246} />
          <Video width={246} />
          <Video width={246} />
        </div>
      </div>
      <div className={styles.listSwiperWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/type-top.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>TOP RATED</span>
          </div>
        </div>
        <div className={styles.listTop}>
          <Video width={246} />
          <Video width={246} />
          <Video width={246} />
          <Video width={246} />
        </div>
      </div>
      <div className={styles.listSwiperWrap}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Image
              className={styles.titleIcon}
              src={'/type-top.png'}
              alt={''}
              width={48}
              height={48}
            />
            <span>TOP RATED</span>
          </div>
          <div className={styles.titleRight}>SEE ALL</div>
        </div>
        <div className={styles.listSwiper}>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Pagination, Navigation]}
            spaceBetween={8}
            slidesPerView={4}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Video width={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Video width={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Video width={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Video width={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Video width={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Video width={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Video width={290} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
