import React from 'react'
import styles from './page.module.css'
import Video from '@/components/Video/Video'
const Detail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headWrap}>
        <div className={styles.head}>
          <div className={styles.headInfo}>
            <img
              className={styles.headIcon}
              src={
                'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
              }
              alt={''}
            />
            <div className={styles.filmNameAndPrice}>
              <div className={styles.filmName}>Film Festival Name</div>
              <div className={styles.filmPrice}>buy $100.00</div>
            </div>
          </div>
          <p className={styles.infoMessage}>
            Torn between loyalty to where he was raised and allegiance to his
            brothers in blue, former Marine Daniel ”Hondo” Harrelson has
            everything it takes to be an excellent leader and bridge the divide
            between his two worlds. Hondo's elite unit includes David “Deacon”
            Kay, an experienced S.W.A.T. officer who always puts the team first,
            despite feeling overlooked for the lead job; Jim Street, a cocky ...
          </p>
        </div>
      </div>
      <div className={styles.videoList}>
        <div className={styles.videoItemItem}>
          <Video width={290} />
          <div className={styles.videoItemRight}>
            <div className={styles.videoItemName}>VIDEOS NAME</div>
            <div className={styles.videoItemTime}>2024-11-06 45分钟</div>
            <div className={styles.videoItemMessage}>
              A S.W.A.T. leader is torn between loyalty to the streets and duty
              to his fellow officers whenhe is tasked to run a specialized
              tactical unit that is the last stop in law enforcement in
              LosAngeles. Series premiere.
            </div>
          </div>
        </div>
        <div className={styles.videoItemItem}>
          <Video width={290} />
          <div className={styles.videoItemRight}>
            <div className={styles.videoItemName}>VIDEOS NAME</div>
            <div className={styles.videoItemTime}>2024-11-06 45分钟</div>
            <div className={styles.videoItemMessage}>
              A S.W.A.T. leader is torn between loyalty to the streets and duty
              to his fellow officers whenhe is tasked to run a specialized
              tactical unit that is the last stop in law enforcement in
              LosAngeles. Series premiere.
            </div>
          </div>
        </div>
        <div className={styles.videoItemItem}>
          <Video width={290} />
          <div className={styles.videoItemRight}>
            <div className={styles.videoItemName}>VIDEOS NAME</div>
            <div className={styles.videoItemTime}>2024-11-06 45分钟</div>
            <div className={styles.videoItemMessage}>
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

export default Detail
