'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { IUserInfo, DefaultUserInfo, getUserInfo } from '@/utils/userinfo'
import { modifyVideo, uploadData } from '@/services/apiService'
import Loading from '@/components/Loading/Loading'

interface IPops {
  defaultData: any
  onFinish: () => void
}
const UploadVideo = (props: IPops) => {
  const [videoId, setVideoId] = useState('')
  const [userInfo, setUserInfo] = useState<IUserInfo>(DefaultUserInfo)
  const [videoUrl, setVideoUrl] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const userInfoData = getUserInfo()
    if (userInfoData) {
      setUserInfo(userInfoData)
    }
    if (props.defaultData) {
      console.log('编辑', props.defaultData)
      setVideoId(props.defaultData.id)
      setVideoUrl(props.defaultData.file_url)
      setLogoUrl(props.defaultData.logo)
      setTitle(props.defaultData.title)
      setSubtitle(props.defaultData.subtitle)
    }
  }, [])
  const handleFileChange = async (type: 'file' | 'logo', e: any) => {
    const file = e.target.files[0]
    console.log('file', file)
    if (file) {
      setUploading(true)

      try {
        const formData = new FormData()
        formData.append('file', file)

        // 请将此 URL 替换为实际的上传接口 URL
        const response = await uploadData(userInfo.user_token, formData)
        console.log('response', response.data)
        if (response.code === 1) {
          const URL = 'http://cineorbht.huizhirh.com' + response.data
          if (type === 'file') {
            setVideoUrl(URL)
          } else {
            setLogoUrl(URL)
          }
        } else {
          alert('上传视频时出现错误，请稍后重试')
        }
      } catch (err) {
        alert('网络错误，请检查网络连接')
        console.log('err', err)
      } finally {
        setUploading(false)
      }
    }
  }
  const handleSubmit = async () => {
    console.log('videoUrl title subtitle', videoUrl, title, subtitle)
    if (videoUrl === '') {
      alert('请上传视频')
      return
    }
    if (logoUrl === '') {
      alert('请上传视频封面')
      return
    }
    if (title === '') {
      alert('请输入标题')
      return
    }
    if (subtitle === '') {
      alert('请输入副标题')
      return
    }
    const response = await modifyVideo(userInfo.user_token, videoId, {
      title,
      subtitle,
      file_url: videoUrl,
      file_url_360: videoUrl,
      file_url_480: videoUrl,
      file_url_720: videoUrl,
      logo: logoUrl
    })
    if (response.code === 200) {
      setVideoUrl('')
      setLogoUrl('')
      setTitle('')
      setSubtitle('')
    }
    alert(response.msg)
    props.onFinish()
    console.log('response', response)
  }
  return (
    <div className={styles.modifyVideoContent}>
      {uploading && <Loading />}
      {userInfo.is_creator === 1 ? (
        <>
          <div className={styles.title}>Upload Your Film</div>
          {videoUrl && (
            <video
              className={styles.showMsg}
              height={100}
              preload="auto"
              controls
              // 根据分辨率状态来设置不同的视频源地址，从配置对象中获取
              src={videoUrl}
            >
              您的浏览器不支持video标签。
            </video>
          )}
          <div className={styles.uploadFilm}>
            <Image src={'/plus.png'} alt={''} width={24} height={24} />
            <input
              type="file"
              accept="video/mp4"
              className={styles.uploadInput}
              id="fileInput"
              onChange={(e) => handleFileChange('file', e)}
            />
          </div>
          <div className={styles.title}>Upload Your Film Cover</div>
          <img className={styles.showMsg} src={logoUrl} alt="" width={200} />
          <div className={styles.uploadFilm}>
            <Image src={'/plus.png'} alt={''} width={24} height={24} />
            <input
              type="file"
              accept="image/jpeg,image/jpg, image/png, image/gif"
              className={styles.uploadInput}
              id="fileInput"
              onChange={(e) => handleFileChange('logo', e)}
            />
          </div>
          <div className={styles.mtTitle}>Film Information</div>
          <div className={styles.filmInfoItem}>
            <div className={styles.filmInfoLabel}>*Film Title</div>
            <input
              value={title}
              className={styles.filmInfoInput}
              placeholder="Enter the name of your film"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.filmInfoItem}>
            <div className={styles.filmInfoLabel}>*Film Subtitle</div>
            <input
              value={subtitle}
              className={styles.filmInfoInput}
              placeholder="Enter the subtitle of your film"
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          {/* <div className={styles.filmInfoItem}>
            <div className={styles.filmInfoLabel}>*Brief Synopsis：</div>
            <input
              className={styles.filmInfoInput}
              placeholder="Provide a short description of the fim"
            />
          </div> */}
          {/* <div className={styles.filmInfoItem}>
            <div className={styles.filmInfoLabel}>*Film Title</div>
            <input
              className={styles.filmInfoInput}
              placeholder="Select the appropriate category for your film"
            />
          </div> */}
          {/* <div className={styles.mtTitle}>Film Credits</div>
          <div className={styles.tableItem}>
            <div className={styles.tableItemTitle}>
              *Directors：
              <Image src={'/delete.png'} alt={''} width={24} height={24} />
            </div>
            <div className={styles.tableItemInputs}>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>
              <Image
                className={styles.tableItemInputsDel}
                src={'/delete.png'}
                alt={''}
                width={24}
                height={24}
              />
            </div>
            <div className={styles.tableAdd}>
              <Image src={'/plus.png'} alt={''} width={12} height={12} />
              <span>Add person</span>
            </div>
          </div>
          <div className={styles.tableItem}>
            <div className={styles.tableItemTitle}>
              *Writers：
              <Image src={'/delete.png'} alt={''} width={24} height={24} />
            </div>
            <div className={styles.tableItemInputs}>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>
              <Image
                className={styles.tableItemInputsDel}
                src={'/delete.png'}
                alt={''}
                width={24}
                height={24}
              />
            </div>
            <div className={styles.tableAdd}>
              <Image src={'/plus.png'} alt={''} width={12} height={12} />
              <span>Add person</span>
            </div>
          </div>
          <div className={styles.tips}>
            (Use the "Add a Person" button to include additional names under
            each role)
          </div>
          <div className={styles.mtTitle}>Screenings and Awards</div>
          <div className={styles.tableItem}>
            <div className={styles.tableItemTitle}>
              *Writers：
              <Image src={'/delete.png'} alt={''} width={24} height={24} />
            </div>
            <div className={styles.tableItemInputs}>
              <div>
                <div className={styles.tableLabel}>*Film Title</div>
                <input
                  className={styles.tableLargeInput}
                  placeholder="Select the appropriate category for your film"
                />
              </div>

              <Image
                className={styles.tableItemInputsDel}
                src={'/delete.png'}
                alt={''}
                width={24}
                height={24}
              />
            </div>
            <div className={styles.tableAdd}>
              <Image src={'/plus.png'} alt={''} width={12} height={12} />
              <span>Add person</span>
            </div>
          </div> */}
          <div className={styles.benefitsBtnWrap}>
            <div className={styles.benefitsBtn} onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </>
      ) : (
        <div>你还不是创作者</div>
      )}
    </div>
  )
}

export default UploadVideo
