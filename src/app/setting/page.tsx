'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import UserHead from '@/components/UserHead/UserHead'
import {
  clearUserInfo,
  DefaultUserAllInfo,
  getUserInfo,
  saveUserInfo
} from '@/utils/userinfo'
import {
  getUserInfoData,
  logoutUser,
  updateUserInfoData,
  uploadData
} from '@/services/apiService'
import Loading from '@/components/Loading/Loading'
const fields = ['email', 'phone', 'nickname', 'base_birthday', 'address']
const Setting = () => {
  // 定义当前选中的 tab，初始值是 1
  const [activeTab, setActiveTab] = useState<number>(0)
  const [userInfo, setUserInfo] = useState<any>(DefaultUserAllInfo)

  const [editingField, setEditingField] = useState(null)
  const [editedInfo, setEditedInfo] = useState<any>({ ...userInfo })
  const getData = async () => {
    const userInfoData = getUserInfo()
    if (userInfoData && userInfoData.user_token) {
      const userData = await getUserInfoData(userInfoData.user_token)
      console.log('userData', userData)

      if (userData.data) {
        setUserInfo(userData.data)
      } else {
        // clearUserInfo()
      }
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const handleEditClick = (field: any) => {
    setEditingField(field)
  }

  const handleSubmitClick = async (field: any) => {
    // 这里可以添加提交修改到服务器的逻辑
    console.log(`Submitted new ${field}:`, editedInfo[field])
    console.log('userInfo', userInfo)
    const res = await updateUserInfoData(
      userInfo.user_token,
      field,
      editedInfo[field]
    )
    console.log('res', res)
    setUserInfo({
      ...userInfo,
      [field]: editedInfo[field]
    })
    setEditingField(null)
  }

  const handleInputChange = (e: any, field: any) => {
    setEditedInfo((prevInfo: any) => ({
      ...prevInfo,
      [field]: e.target.value
    }))
  }
  // 左侧 Tab 列表 (固定数据)
  const tabs = [
    {
      id: 1,
      label: (
        <>
          <Image
            className={styles.chartsIcon}
            src={'/setting-plan.png'}
            alt={''}
            width={14}
            height={18}
          />
          <span className={styles.tabText}>Your</span>
        </>
      )
    },
    {
      id: 2,
      label: (
        <>
          <Image
            className={styles.chartsIcon}
            src={'/setting-billing.png'}
            alt={''}
            width={14}
            height={18}
          />
          <span className={styles.tabText}>Billing</span>
        </>
      )
    }
  ]
  const [uploading, setUploading] = useState(false)
  const handleFileChange = async (e: any) => {
    const file = e.target.files[0]
    console.log('file', file)
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif']
      if (!validImageTypes.includes(file.type)) {
        alert('请选择有效的图片文件 (JPEG, PNG, GIF)')
        return
      }
      setUploading(true)
      alert('')

      try {
        const formData = new FormData()
        formData.append('file', file)

        // 请将此 URL 替换为实际的上传接口 URL
        const response = await uploadData(userInfo.user_token, formData)
        console.log('response', response.data)
        if (response.code === 1) {
          const user_logo = 'http://cineorbht.huizhirh.com' + response.data
          setUserInfo({
            ...userInfo,
            user_logo: user_logo
          })
          saveUserInfo({
            ...userInfo,
            user_logo: user_logo
          })
          updateUserInfoData(userInfo.user_token, 'headimg', user_logo)
        } else {
          alert('上传图片时出现错误，请稍后重试')
        }
      } catch (err) {
        alert('网络错误，请检查网络连接')
        console.log('err', err)
      } finally {
        setUploading(false)
      }
    }
  }
  // 右侧 Tab 内容 (固定数据)
  const tabContents: any = {
    0: (
      <div>
        <div className={styles.itemWrap}>
          <div className={styles.itemLeft}>
            <img
              className={styles.headIcon}
              src={userInfo.user_logo}
              alt={''}
            />
            <span className={styles.tabText}>Upload your profile photo</span>
          </div>
          <div className={styles.btn}>
            Upload photo
            <input
              type="file"
              accept="image/jpeg,image/jpg, image/png, image/gif"
              className={styles.uploadInput}
              id="fileInput"
              onChange={handleFileChange}
            />
          </div>
        </div>
        {fields.map((field) => (
          <div key={field}>
            <div className={styles.divider}></div>
            <div className={styles.itemWrap}>
              <div>
                <div className={styles.leftText}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </div>
                {editingField === field ? (
                  <input
                    className={styles.filmInfoInput}
                    type={field === 'email' ? 'email' : 'text'}
                    value={editedInfo[field]}
                    onChange={(e) => handleInputChange(e, field)}
                  />
                ) : (
                  <div className={styles.leftSubText}>{userInfo[field]}</div>
                )}
              </div>
              {(editingField === null || editingField === field) && (
                <div
                  className={styles.btn}
                  onClick={
                    editingField === field
                      ? () => handleSubmitClick(field)
                      : () => handleEditClick(field)
                  }
                >
                  {editingField === field ? 'Submit' : 'Edit'}
                </div>
              )}
            </div>
          </div>
        ))}
        {/* <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>Email</div>
            <div className={styles.leftSubText}>{userInfo.email}</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>phone number</div>
            <div className={styles.leftSubText}>{userInfo.phone}</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>name</div>
            <div className={styles.leftSubText}>{userInfo.nickname}</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>birthday</div>
            <div className={styles.leftSubText}>{userInfo.base_birthday}</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.itemWrap}>
          <div>
            <div className={styles.leftText}>address</div>
            <div className={styles.leftSubText}>{userInfo.address}</div>
          </div>
          <div className={styles.btn}>Edit</div>
        </div> */}
      </div>
    ),
    1: (
      <div>
        <h2>这是 Tab 1 的内容</h2>
        <div>这里是 Tab 1 的详细内容。</div>
      </div>
    ),
    2: (
      <div>
        <h2>这是 Tab 2 的内容</h2>
        <div>这里是 Tab 2 的详细内容。</div>
      </div>
    )
  }

  // 切换 Tab 的事件处理函数
  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId)
  }

  const handleLogout = async () => {
    console.log('userInfo', userInfo)
    await logoutUser(userInfo.user_token)
    clearUserInfo()
    setTimeout(() => {
      window.location.href = '/'
    }, 300)
  }
  return (
    <div className={styles.wrap}>
      <UserHead title={'My Account'} />
      {uploading && <Loading />}
      <div className={styles.contentWrap}>
        <div className={styles.contentBox}>
          <div className={styles.sidebar}>
            {/* 渲染左侧导航栏的 Tabs */}
            <div
              className={`${styles.tab} ${styles.tabHead} ${
                0 === activeTab ? styles.active : ''
              }`}
              onClick={() => handleTabClick(0)}
            >
              <img
                className={styles.headIcon}
                src={userInfo.user_logo}
                alt={''}
              />
              <span className={styles.tabText}>{userInfo.nickname}</span>
            </div>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${styles.tab} ${
                  tab.id === activeTab ? styles.active : ''
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </div>
            ))}
            <div className={`${styles.tab} `} onClick={() => handleLogout()}>
              <>
                <Image
                  className={styles.chartsIcon}
                  src={'/setting-logout.png'}
                  alt={''}
                  width={14}
                  height={18}
                />
                <span className={styles.tabText}>logout</span>
              </>
            </div>
          </div>
          <div className={styles.content}>
            {/* 渲染右侧内容，根据 activeTab 来决定显示哪一部分 */}
            <div className={styles.tabContent}>{tabContents[activeTab]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
