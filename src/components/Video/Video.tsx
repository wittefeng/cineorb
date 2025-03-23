import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './video.module.css'
interface IProps {
  width?: number
  imageUrl: string
  id: string
}
const Video = (props: IProps) => {
  const { width = 360, id, imageUrl } = props
  return (
    <Link
      href={'/video/' + id}
      className={styles.wrap}
      style={{
        width: width + 'px',
        height: (width * 200) / 360 + 'px'
      }}
    >
      <div
        className={styles.imgWrap}
        style={{
          backgroundImage: `url(${imageUrl})`,
          // backgroundImage: 'url(/test.jpg)',
          width: width - 2 + 'px',
          height: (width * 200) / 360 - 2 + 'px'
        }}
      ></div>
      <Image
        className={styles.playIcon}
        src="/play.png"
        width={40}
        height={40}
        alt={''}
      />
    </Link>
  )
}

export default Video
