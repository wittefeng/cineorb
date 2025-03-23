'use client'

import React from 'react'
import styles from './page.module.css'
import Video from '@/components/Video/Video'

const CategoryBiz = ({ dataLibrary }: any) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headWrap}>
          <div className={styles.head}>
            <img
              className={styles.headImg}
              src={
                'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
              }
              alt={''}
            />
            <div className={styles.titleWrap}>
              <div className={styles.title}>
                {dataLibrary.library_info.title}
              </div>
              <div className={styles.priceBtn}>
                buy ${dataLibrary.library_info.price}
              </div>
            </div>
          </div>
          <div className={styles.filmInfo}>
            {dataLibrary.library_info.desc_text}
          </div>
        </div>
      </div>
      <div className={styles.listWrap}>
        {dataLibrary.video_list.map((item: any, index: number) => (
          <div className={styles.itemWrap} key={index}>
            <Video width={290} imageUrl={item.logo} id={item.id} />
            <div className={styles.itemInfoWrap}>
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemTime}>{item.file_time}</div>
              <div className={styles.itemInfo}>{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryBiz
