'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
const VideoPlay = () => {
  return (
    <div>
      <h1>Video Title</h1>

      <div className={styles.videoWrap}>
        <video
          width="100%"
          className="custom-video"
          preload="auto"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          // onDurationChange={handleDurationChange(event)}
          // ontimeupdate="handleUpdateVideo(event)"
          // onwaiting="handleVideoLoading()"
          // onended="handleVideoEnded()"
          // onloadedmetadata="handleVideoCache(event)"
        >
          您的浏览器不支持video标签。
        </video>
        <div className={styles.customControl}>
          <div className={styles.controlBtns}>
            <Image src={'/rewind.png'} alt={''} width={52} height={39} />
            <Image src={'/pause.png'} alt={''} width={31} height={47} />
            <Image src={'/fastforward.png'} alt={''} width={51} height={39} />
          </div>
          <div className={styles.controlProgress}>
            <span className={styles.startTime}>0:23</span>
            <div className={styles.progress}>
              <span className={styles.currentTime}></span>
              <span></span>
            </div>
            <span className={styles.endTime}>3:23</span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <Image src={''} alt={''} width={20} height={20} />
          <span>Nickname</span>
        </div>
        <div>探秘最便宜的欧洲国家！一日三餐，要花多少钱？</div>
        <div>
          简介：探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？
        </div>
      </div>
    </div>
  )
}

export default VideoPlay
