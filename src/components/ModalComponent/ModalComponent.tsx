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
  modalData?: ModalData
  children?: any
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  modalData,
  children
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src={'/delete.png'} alt={''} width={24} height={24} />
        </button>
        {modalData && (
          <>
            <div className={styles.textWrap}>
              <h2 className={styles.title}>{modalData.title}</h2>
              <p className={styles.description}>{modalData.description}</p>
            </div>
            <img
              src={modalData.imageUrl}
              alt={modalData.title}
              className={styles.modalImage}
            />
          </>
        )}
        {children}
      </div>
    </div>
  )
}

export default ModalComponent
