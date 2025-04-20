'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { getCreatorVideo, modifyVideo } from '@/services/apiService'
import { IUserInfo, DefaultUserInfo, getUserInfo } from '@/utils/userinfo'
import ModalComponent from '@/components/ModalComponent/ModalComponent'
import ModifyVideo from './ModifyVideo'
const VideoManagement = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(DefaultUserInfo)
  const [list, setList] = useState([])
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const [modifyVideoData, setModifyVideoData] = useState()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const getData = async (user_token: string) => {
    const res = await getCreatorVideo(user_token)
    console.log('res', res)
    setList(res.data)
  }

  useEffect(() => {
    const userInfoData = getUserInfo()
    if (userInfoData) {
      getData(userInfoData.user_token)
      setUserInfo(userInfoData)
    }
  }, [])

  const changeList = async (is_list: string, videoId: string) => {
    const response = await modifyVideo(userInfo.user_token, videoId, {
      is_list
    })
    alert(response.msg)
    getData(userInfo.user_token)
  }
  return (
    <div className={styles.videoManagementContent}>
      {userInfo.is_creator === 1 ? (
        <>
          {isModalOpen && (
            <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
              <ModifyVideo
                defaultData={modifyVideoData}
                onFinish={() => {
                  closeModal()
                  getData(userInfo.user_token)
                }}
              />
            </ModalComponent>
          )}
          <div className={styles.videoManagementTitle}>
            <div
              className={styles.videoManagementBtn}
              onClick={() => {
                setIsEdit(!isEdit)
              }}
            >
              {!isEdit ? 'Edit' : 'Cancel Edit'}
            </div>
            <p>
              Click edit to edit titles, descriptions, tags, categories, or
              delete videos.
            </p>
          </div>
          <div className={styles.videoManagementList}>
            {list.map((item: any, index: number) => (
              <div key={index} className={styles.itemWrap}>
                <img
                  width={212}
                  height={120}
                  src={item.logo}
                  id={item.cat_id}
                  style={{ objectFit: 'cover' }}
                />
                {item.is_list === 1 ? (
                  <div className={styles.status}>已发布</div>
                ) : (
                  <div className={styles.status}>未发布</div>
                )}
                {userInfo.is_creator === 1 && (
                  <div className={styles.dataInfo}>
                    点赞数：{item.likes}&nbsp;&nbsp;收藏数：{item.collections}
                  </div>
                )}
                {isEdit && (
                  <div className={styles.btnsWrap}>
                    <div
                      className={styles.btn}
                      onClick={() => {
                        setModifyVideoData(item)
                        setIsModalOpen(true)
                      }}
                    >
                      编辑
                    </div>
                    {item.is_list === 1 ? (
                      <div
                        className={styles.btn}
                        onClick={() => changeList('0', item.id)}
                      >
                        下架
                      </div>
                    ) : (
                      <div
                        className={styles.btn}
                        onClick={() => changeList('1', item.id)}
                      >
                        发布
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>您还不是创作者</div>
      )}
    </div>
  )
}

export default VideoManagement
