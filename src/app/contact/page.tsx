'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import CustomSelect from '@/components/CustomSelect/CustomSelect'
const Contact = () => {
  const [selectedValue, setSelectedValue] = useState<string>('')

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]

  const handleSelect = (value: string) => {
    setSelectedValue(value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contact Us</div>
      <div className={styles.message}>
        We're here to help! Reach out for assistance, inquiries, or partnership
        opportunities.
      </div>
      <div className={styles.formWrap}>
        <div className={styles.subTitle}>Contact Form</div>
        <div className={styles.inputWrap}>
          <input type="text" placeholder="Enter Your Email or mobile number" />
        </div>
        <div className={styles.inputWrap}>
          <input type="text" placeholder="Enter Your Email or mobile number" />
        </div>
        <CustomSelect
          options={options}
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />
        <div className={styles.textareaWrap}>
          <textarea placeholder="Enter Your Email or mobile number" />
        </div>
        <div className={styles.formBtn}>SUBMIT</div>
      </div>
      <div className={styles.bottomMessage}>
        <div className={styles.bottomMessageTitle}>
          Direct Contact Information
        </div>
        <div className={styles.bottomMessageP}>
          Customer Support Email: contact@cineorb.com Support Hours: Monday to
          Friday, 9 AM - 6 PM (PST)
        </div>
      </div>
      <div className={styles.bottomMessage}>
        <div className={styles.bottomMessageTitle}>
          For Partnership or Collaboration Inquiries
        </div>
        <div className={styles.bottomMessageP}>
          If you are a professional interested in partnerships or
          collaborations, please complete the form above with
          "Partnership/Collaboration Inquiry" as the subject. Our team will
          review your message and connect with you to discuss potential
          opportunities.
        </div>
      </div>
    </div>
  )
}

export default Contact
