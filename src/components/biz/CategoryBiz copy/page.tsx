'use client'

import React from 'react'
import styles from './page.module.css'
import Video from '@/components/Video/Video'

const Category = () => {
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
              <div className={styles.title}>Film Festival Name</div>
              <div className={styles.priceBtn}>buy $100.00</div>
            </div>
          </div>
          <div className={styles.filmInfo}>
            Torn between loyalty to where he was raised and allegiance to his
            brothers in blue, former Marine Daniel ”Hondo” Harrelson has
            everything it takes to be an excellent leader and bridge the divide
            between his two worlds. Hondo's elite unit includes David “Deacon”
            Kay, an experienced S.W.A.T. officer who always puts the team first,
            despite feeling overlooked for the lead job; Jim Street, a cocky ...
          </div>
        </div>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.itemWrap}>
          <Video width={290} />
          <div className={styles.itemInfoWrap}>
            <div className={styles.itemTitle}>VIDEOS NAME</div>
            <div className={styles.itemTime}>2024-11-06 45分钟</div>
            <div className={styles.itemInfo}>
              A S.W.A.T. leader is torn between loyalty to the streets and duty
              to his fellow officers whenhe is tasked to run a specialized
              tactical unit that is the last stop in law enforcement in
              LosAngeles. Series premiere.
            </div>
          </div>
        </div>
        <div className={styles.itemWrap}>
          <Video width={290} />
          <div className={styles.itemInfoWrap}>
            <div className={styles.itemTitle}>VIDEOS NAME</div>
            <div className={styles.itemTime}>2024-11-06 45分钟</div>
            <div className={styles.itemInfo}>
              A S.W.A.T. leader is torn between loyalty to the streets and duty
              to his fellow officers whenhe is tasked to run a specialized
              tactical unit that is the last stop in law enforcement in
              LosAngeles. Series premiere.
            </div>
          </div>
        </div>
        <div className={styles.itemWrap}>
          <Video width={290} />
          <div className={styles.itemInfoWrap}>
            <div className={styles.itemTitle}>VIDEOS NAME</div>
            <div className={styles.itemTime}>2024-11-06 45分钟</div>
            <div className={styles.itemInfo}>
              A S.W.A.T. leader is torn between loyalty to the streets and duty
              to his fellow officers whenhe is tasked to run a specialized
              tactical unit that is the last stop in law enforcement in
              LosAngeles. Series premiere.
            </div>
          </div>
        </div>
        <div className={styles.itemWrap}>
          <Video width={290} />
          <div className={styles.itemInfoWrap}>
            <div className={styles.itemTitle}>VIDEOS NAME</div>
            <div className={styles.itemTime}>2024-11-06 45分钟</div>
            <div className={styles.itemInfo}>
              A S.W.A.T. leader is torn between loyalty to the streets and duty
              to his fellow officers whenhe is tasked to run a specialized
              tactical unit that is the last stop in law enforcement in
              LosAngeles. Series premiere.
            </div>
          </div>
        </div>
        <div className={styles.itemWrap}>
          <Video width={290} />
          <div className={styles.itemInfoWrap}>
            <div className={styles.itemTitle}>VIDEOS NAME</div>
            <div className={styles.itemTime}>2024-11-06 45分钟</div>
            <div className={styles.itemInfo}>
              A S.W.A.T. leader is torn between loyalty to the streets and duty
              to his fellow officers whenhe is tasked to run a specialized
              tactical unit that is the last stop in law enforcement in
              LosAngeles. Series premiere.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
