'use client'
import React, { useState } from 'react'
import Video from '@/components/Video/Video'
import styles from './page.module.css'
const VideoManagement = () => {
  return (
    <div className={styles.videoManagementContent}>
      <div className={styles.videoManagementTitle}>
        <div className={styles.videoManagementBtn}>Edit</div>
        <p>
          Click edit to edit titles, descriptions, tags, categories, or delete
          videos.
        </p>
      </div>
      <div className={styles.videoManagementList}>
        <Video width={212} />
        <Video width={212} />
        <Video width={212} />
        <Video width={212} />
        <Video width={212} />
      </div>
    </div>
  )
}

export default VideoManagement
