'use client'
import React from 'react'
import Image from 'next/image'
import styles from './ModalComponent.module.css'

// 定义弹框展示数据的类型
export interface ModalData {
  title: string
  description: string
  imageUrl: string
}

// 定义弹框组件接收的props类型
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  modalData: ModalData
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  modalData
}) => {
  if (!isOpen) {
    return null
  }

  const { title, description, imageUrl } = modalData

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.textWrap}>
          <button className={styles.closeButton} onClick={onClose}>
            <Image src={'/delete.png'} alt={''} width={24} height={24} />
          </button>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <img src={imageUrl} alt={title} className={styles.modalImage} />
      </div>
    </div>
  )
}

export default ModalComponent
