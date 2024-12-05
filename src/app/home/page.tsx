'use client'

import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Video from '@/components/Video/Video'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import usePageWidthListener from '@/hook/usePageWidthListener'
import { calculateElementBetween } from '@/utils/utils'
export default function Home() {
  const pageWidth = usePageWidthListener()
  const calculateElementCount = (pageWidth: number): number => {
    const effectiveWidth = Math.min(pageWidth * 0.95, 1278)
    const count = Math.floor(effectiveWidth / 246)
    return Math.max(count, 1)
  }

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
          <Swiper
            className={styles.swiperContainer}
            modules={[Navigation]}
            spaceBetween={calculateElementBetween(pageWidth)}
            slidesPerView={calculateElementCount(pageWidth)}
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
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
          </Swiper>
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
          <Swiper
            className={styles.swiperContainer}
            modules={[Navigation]}
            spaceBetween={calculateElementBetween(pageWidth)}
            slidesPerView={calculateElementCount(pageWidth)}
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
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
          </Swiper>
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
          <Swiper
            className={styles.swiperContainer}
            modules={[Navigation]}
            spaceBetween={calculateElementBetween(pageWidth)}
            slidesPerView={calculateElementCount(pageWidth)}
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
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlides}>
              <Video width={246} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
