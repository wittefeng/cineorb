'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const VideoPlay = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [progressWidth, setProgressWidth] = useState<number>(0)

  const offset = 18

  // 处理播放/暂停按钮点击
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // 处理快进按钮点击
  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10
    }
  }

  // 处理倒退按钮点击
  const rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10
    }
  }

  // 更新视频的当前时间
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  // 格式化时间为 mm:ss
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onended = () => {
        setIsPlaying(false)
      }
      setProgressWidth(progressRef.current?.offsetWidth || 0)
    }
  }, [])

  // 处理全屏播放按钮点击，切换全屏状态
  const toggleFullscreen = () => {
    if (videoRef.current && fullscreenRef.current) {
      if (!isFullscreen) {
        fullscreenRef.current.requestFullscreen().catch((error: any) => {
          console.error('请求全屏时出错:', error)
        })
      } else {
        document.exitFullscreen().catch((error) => {
          console.error('退出全屏时出错:', error)
        })
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (isDragging && videoRef.current && progressRef.current) {
        const rect = progressRef.current.getBoundingClientRect()
        let offsetX = event.clientX - rect.left - offset
        offsetX = Math.max(0, Math.min(offsetX, rect.width))
        const newTime = (offsetX / rect.width) * videoRef.current.duration
        videoRef.current.currentTime = newTime
        setCurrentTime(newTime)
      }
    },
    [isDragging, progressWidth]
  )

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag)
      document.addEventListener('mouseup', handleMouseUp)
    } else {
      document.removeEventListener('mousemove', handleDrag)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleDrag)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleDrag])

  const fullscreenRef = useRef<any>(null)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  return (
    <div ref={fullscreenRef}>
      <h1 className={styles.videoTitle}>Video Title</h1>

      <div className={styles.videoWrap}>
        <video
          width="100%"
          className="custom-video"
          preload="auto"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        >
          您的浏览器不支持video标签。
        </video>

        <div className={styles.customControl}>
          <div className={styles.controlBtns}>
            <div onClick={rewind}>
              <Image src="/rewind.png" alt="Rewind" width={52} height={39} />
            </div>
            <div onClick={togglePlayPause}>
              <Image
                src={isPlaying ? '/pause.png' : '/play.png'}
                alt={isPlaying ? 'Pause' : 'Play'}
                width={31}
                height={47}
                objectFit={'contain'}
              />
            </div>
            <div onClick={fastForward}>
              <Image
                src="/fastforward.png"
                alt="Fast Forward"
                width={51}
                height={39}
              />
            </div>
            <div onClick={toggleFullscreen}>
              <Image
                src={isFullscreen ? '/exit-fullscreen.png' : '/fullscreen.png'}
                alt={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                width={36}
                height={36}
              />
            </div>
          </div>

          <div className={styles.controlProgress}>
            <span className={styles.startTime}>{formatTime(currentTime)}</span>
            <div className={styles.progress} ref={progressRef}>
              <span
                className={styles.currentTime}
                style={{
                  left: `${
                    (currentTime / (videoRef.current?.duration || 1)) * 100
                  }%`
                }}
              ></span>
              <span
                className={styles.currentOval}
                style={{
                  left: `${
                    (currentTime / (videoRef.current?.duration || 1)) * 100
                  }%`
                }}
                onMouseDown={handleMouseDown}
              ></span>
            </div>
            <span className={styles.endTime}>
              {formatTime(videoRef.current?.duration || 0)}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.headWrap}>
          <img
            className={styles.headIcon}
            src={
              'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
            }
            alt={''}
          />
          <span className={styles.nickName}>Nickname</span>
        </div>
        <div className={styles.title}>
          探秘最便宜的欧洲国家！一日三餐，要花多少钱？
        </div>
        <div className={styles.subTitle}>
          简介：探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？探秘最便宜的欧洲国家！一日三餐，要花多少钱？
        </div>
        <div className={styles.like}>
          <Image src={'/like.png'} width={36} height={36} alt={''} />
          Like
        </div>
        <div className={styles.save}>
          <Image src={'/save.png'} width={36} height={36} alt={''} />
          Save
        </div>
      </div>
    </div>
  )
}

export default VideoPlay
