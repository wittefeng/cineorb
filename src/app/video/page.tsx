'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
const VideoPlay = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null) // 用来引用 video 元素
  const progressRef = useRef<HTMLDivElement | null>(null) // 用来引用 video 拖拽 元素
  const [currentTime, setCurrentTime] = useState<number>(0) // 当前播放时间
  const [isPlaying, setIsPlaying] = useState<boolean>(false) // 控制播放/暂停状态
  const [isDragging, setIsDragging] = useState<boolean>(false) // 是否正在拖拽进度条
  const [progressWidth, setProgressWidth] = useState<number>(0) // 进度条的宽度

  // 偏移量
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
      videoRef.current.currentTime += 10 // 快进 10 秒
    }
  }

  // 处理倒退按钮点击
  const rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10 // 倒退 10 秒
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

  // 视频结束时设置播放状态
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onended = () => {
        setIsPlaying(false)
      }
      setProgressWidth(progressRef.current?.offsetWidth || 0) // 设置进度条宽度
    }
  }, [])

  // 拖拽进度条时
  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (isDragging && videoRef.current && progressRef.current) {
        const rect = progressRef.current.getBoundingClientRect() // 获取进度条容器的位置
        let offsetX = event.clientX - rect.left - offset // 计算鼠标相对位置并减去偏移量

        // 限制 offsetX 在进度条宽度范围内
        offsetX = Math.max(0, Math.min(offsetX, rect.width))

        const newTime = (offsetX / rect.width) * videoRef.current.duration // 计算新的播放时间
        videoRef.current.currentTime = newTime // 更新视频播放时间
        setCurrentTime(newTime) // 更新当前时间
      }
    },
    [isDragging, progressWidth]
  )

  // 当拖动开始时
  const handleMouseDown = () => {
    setIsDragging(true)
  }

  // 当拖动结束时
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // 在组件卸载时移除事件监听
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
  return (
    <div>
      <h1>Video Title</h1>

      <div className={styles.videoWrap}>
        <video
          width="100%"
          className="custom-video"
          preload="auto"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate} // 监听时间更新
          onEnded={() => setIsPlaying(false)} // 视频结束时，更新播放状态
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
                onMouseDown={handleMouseDown} // 鼠标按下时开始拖动
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
