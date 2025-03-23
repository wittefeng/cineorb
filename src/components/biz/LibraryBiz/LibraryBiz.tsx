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

const LibraryBiz = ({ dataLibrary }: any) => {
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
  return (
    <div className={styles.page}>
      <div>
        <div className={styles.first}>
          <div>
            <Video imageUrl={''} id={''} />
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
            <Video imageUrl={''} id={''} />
            <Image
              className={styles.chartsIcon}
              src={'/charts-2.png'}
              alt={''}
              width={80}
              height={50}
            />
          </div>
          <div>
            <Video imageUrl={''} id={''} />
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

      <div>
        {dataLibrary.map((item: any, index: number) => (
          <div className={styles.listWrap} key={index}>
            <div className={styles.title}>
              <div className={styles.left}>
                <img
                  className={styles.titleIcon}
                  src={item.data.logo}
                  alt={''}
                  width={48}
                  height={48}
                />
                <span>{item.data.library_info.title}</span>
              </div>
              <Link
                href={`/category/${item.uniqueId}`}
                target={'_blank'}
                className={styles.titleRight}
              >
                ALL SEE
              </Link>
            </div>
            <div className={styles.listTop}>
              {item.data.video_list.length > 4 ? (
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
                  {item.data.video_list.map((vItem: any, vIndex: number) => (
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
                item.data.video_list.map((vItem: any, vIndex: number) => (
                  <div className={styles.videoBox} key={vIndex}>
                    <Video
                      width={videoWidth}
                      imageUrl={vItem.logo}
                      id={vItem.id}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LibraryBiz
