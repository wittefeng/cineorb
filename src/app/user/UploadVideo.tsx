'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const UploadVideo = () => {
  return (
    <div className={styles.uploadVideoContent}>
      <div className={styles.title}>Upload Your Film</div>
      <div className={styles.uploadFilm}>
        <Image src={'/plus.png'} alt={''} width={24} height={24} />
      </div>
      <div className={styles.mtTitle}>Film Information</div>
      <div className={styles.filmInfoItem}>
        <div className={styles.filmInfoLabel}>*Film Title</div>
        <input
          className={styles.filmInfoInput}
          placeholder="Enter the name of your film"
        />
      </div>
      <div className={styles.filmInfoItem}>
        <div className={styles.filmInfoLabel}>*Brief Synopsis：</div>
        <input
          className={styles.filmInfoInput}
          placeholder="Provide a short description of the fim"
        />
      </div>
      <div className={styles.filmInfoItem}>
        <div className={styles.filmInfoLabel}>*Film Title</div>
        <input
          className={styles.filmInfoInput}
          placeholder="Select the appropriate category for your film"
        />
      </div>
      <div className={styles.mtTitle}>Film Credits</div>
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
        (Use the "Add a Person" button to include additional names under each
        role)
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
      </div>
    </div>
  )
}

export default UploadVideo
