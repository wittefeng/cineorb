'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import {
  clearUserInfo,
  DefaultUserInfo,
  getUserInfo,
  IUserInfo
} from '@/utils/userinfo'
import {
  checkUserLoginStatus,
  sendCollectionData,
  sendLikeData,
  watching
} from '@/services/apiService'

// 视频源配置对象，以不同分辨率作为键，方便扩展不同分辨率的相关信息及视频地址

const ResolutionDropdown = ({
  videoSources,
  selectedResolution,
  onResolutionChange
}: any) => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  // 点击下拉菜单外部区域时关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownRef.current) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 处理分辨率选项点击事件
  const handleOptionClick = (resolution: any) => {
    onResolutionChange(resolution)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className={styles.otherTextWrap}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {videoSources[selectedResolution].text}
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {Object.keys(videoSources).map((key) => (
            <div
              key={key}
              className={styles.dropdownOption}
              onClick={() => handleOptionClick(key)}
            >
              {videoSources[key].text}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const VideoPlayBiz = ({ videoData }: any) => {
  console.log('videoData', videoData)
  const [userInfo, setUserInfo] = useState<IUserInfo>(DefaultUserInfo)
  const [isLike, setIsLike] = useState(!!videoData.is_like)
  const [isCollect, setIsCollect] = useState(false)
  const checkUserStatus = async (token: string) => {
    checkUserLoginStatus(token)
  }
  useEffect(() => {
    const userInfoData = getUserInfo()

    if (userInfoData) {
      setUserInfo(userInfoData)
      checkUserStatus(userInfoData.user_token)
    } else {
      clearUserInfo()
    }
  }, [])

  const handleSendLike = async () => {
    await sendLikeData(userInfo.user_token, videoData.video_info.id)
    setIsLike(true)
  }
  const handleSendCollection = async () => {
    const res = await sendCollectionData(
      userInfo.user_token,
      videoData.video_info.id
    )
    setIsCollect(!!res.data.is_collection)
  }
  const videoSources: any = {
    '360p': {
      source: videoData.video_info.file_url,
      // source: videoData.video_info.file_url_360,
      text: '360p'
    },
    '480p': {
      source: videoData.video_info.file_url,
      // source: videoData.video_info.file_url_480,
      text: '480p'
    },
    '720p': {
      source: videoData.video_info.file_url,
      // source: videoData.video_info.file_url_360,
      text: '720p'
    }
  }
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [progressWidth, setProgressWidth] = useState<number>(0)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const offset = 18
  // 添加状态来管理视频分辨率，初始设为2k
  const [resolution, setResolution] = useState<string>('360p')

  useEffect(() => {
    console.log('记录视频播放时间')
    watching(userInfo.user_token, videoData.video_info.id, '1')
  }, [currentTime])
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

  // 处理音量静音/非静音切换按钮点击
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
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

  // 处理分辨率切换的函数，根据选择的分辨率进行切换
  const handleResolutionChange = (newResolution: any) => {
    setResolution(newResolution)
    if (videoRef.current) {
      videoRef.current.src = '' // 先移除src属性
      setTimeout(() => {
        if (videoRef && videoRef.current) {
          // 根据配置对象中的分辨率参数来设置视频源地址
          videoRef.current.src = videoSources[newResolution].source
          videoRef.current?.load() // 可以调用load方法确保加载
          setIsPlaying(false)
        }
      }, 10)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.videoTitle}>{videoData.video_info.title}</h1>

      <div className={styles.videoWrap} ref={fullscreenRef}>
        <video
          width="100%"
          className="custom-video"
          preload="auto"
          // 根据分辨率状态来设置不同的视频源地址，从配置对象中获取
          src={videoSources[resolution].source}
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        >
          您的浏览器不支持video标签。
        </video>

        <div className={styles.customControl}>
          <div className={styles.controlBtns}>
            <div onClick={rewind}>
              <Image src="/rewind.png" alt="Rewind" width={24} height={24} />
            </div>
            <div onClick={togglePlayPause}>
              <Image
                src={isPlaying ? '/pause.png' : '/play.png'}
                alt={isPlaying ? 'Pause' : 'Play'}
                width={37}
                height={37}
                objectFit={'contain'}
              />
            </div>
            <div onClick={fastForward}>
              <Image
                src="/fastforward.png"
                alt="Fast Forward"
                width={24}
                height={24}
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
            <div onClick={toggleMute} className={styles.otherIcon}>
              <Image
                src={isMuted ? '/mute.png' : '/unmute.png'}
                alt={isMuted ? 'Mute' : 'Unmute'}
                width={25}
                height={19}
              />
            </div>
            <ResolutionDropdown
              videoSources={videoSources}
              selectedResolution={resolution}
              onResolutionChange={handleResolutionChange}
            />
            <div onClick={toggleFullscreen} className={styles.otherIcon}>
              <Image
                src={'/fullscreen.png'}
                alt={'Fullscreen'}
                width={22}
                height={22}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.headWrap}>
          <img
            className={styles.headIcon}
            src={videoData.video_info.logo}
            alt={''}
          />
          <span className={styles.nickName}>Nickname</span>
        </div>
        <div className={styles.title}>{videoData.video_info.title}</div>
        <div className={styles.subTitle}>{videoData.video_info.subtitle}</div>
        <div className={styles.like} onClick={handleSendLike}>
          <Image
            src={isLike ? '/like.png' : '/unlike.png'}
            width={36}
            height={36}
            alt={''}
          />
          Like
        </div>
        <div className={styles.save} onClick={handleSendCollection}>
          <Image
            src={isCollect ? '/save.png' : '/unsave.png'}
            width={36}
            height={36}
            alt={''}
          />
          Save
        </div>
      </div>
    </div>
  )
}

export default VideoPlayBiz
