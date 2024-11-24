// src/components/CustomSelect.tsx
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './custom-select.module.css'

// 选项类型
interface Option {
  label: string
  value: string
}

// 自定义选择组件的 props
interface CustomSelectProps {
  options: Option[] // 下拉选项
  selectedValue: string // 当前选中的值
  onSelect: (value: string) => void // 选中某项后的回调
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedValue,
  onSelect
}) => {
  const [isOpen, setIsOpen] = useState(false) // 控制下拉框是否打开
  const selectRef = useRef<HTMLDivElement | null>(null) // 用来检测点击区域
  const toggleDropdown = () => setIsOpen((prev) => !prev)

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <div className={styles.customSelectHeader} onClick={toggleDropdown}>
        <span>
          {options.find((option) => option.value === selectedValue)?.label ||
            '请选择'}
        </span>
        <Image
          alt=""
          width={8}
          height={16}
          src="/select-arrow.png"
          className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}
        ></Image>
      </div>
      {isOpen && (
        <div className={styles.customSelectOptions}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.customSelectOption}
              onClick={() => {
                onSelect(option.value) // 选择某项
                setIsOpen(false) // 选择后关闭下拉框
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
