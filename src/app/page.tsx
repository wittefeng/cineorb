'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ModalComponent, {
  ModalData
} from '@/components/ModalComponent/ModalComponent'

export default function Home() {
  const imagesArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
    // 这里添加更多图片路径
  ]
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // 用来跟踪当前展开的 FAQ 项目

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)) // 切换当前展开的 FAQ 项目
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentModalData, setCurrentModalData] = useState<ModalData | null>(
    null
  )

  const openModal = (data: ModalData) => {
    console.log('data', data)
    setCurrentModalData(data)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentModalData(null)
  }
  const faqData = [
    {
      question: 'What is Cineorb?',
      answer:
        'CINEORB is an online platform dedicated to microfilms. With its innovative approach and unique resources in Silicon Valley, CINEORB collaborates with global film festivals to provide independent microfilm creators with a platform to showcase their work. Users can enjoy a curated selection of films from festivals and original works uploaded by independent creators.'
    },
    {
      question: 'How does Cineorb work?',
      answer:
        'CINEORB works by partnering with film festivals worldwide to curate a selection of microfilms, while also offering a platform for independent filmmakers to showcase their original works. The platform is designed to make microfilms accessible to global audiences.'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const imagesPerPage = 11

  // 向前切换图片的函数
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - imagesPerPage
      if (newIndex < 0) {
        newIndex = Math.max(0, imagesArray.length - imagesPerPage)
      }
      return newIndex
    })
  }

  // 向后切换图片的函数
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + imagesPerPage
      if (newIndex >= imagesArray.length) {
        newIndex = 0
      }
      return newIndex
    })
  }

  // 获取当前要显示的图片列表
  const currentImages = imagesArray.slice(
    currentIndex,
    currentIndex + imagesPerPage
  )
  const FAQItem = React.memo(function FAQItem({
    index,
    question,
    answer,
    isActive,
    toggleAnswer
  }: any) {
    return (
      <div
        className={`${styles.faqItem} ${isActive ? styles.open : ''}`}
        key={index}
      >
        <h2 onClick={() => toggleAnswer(index)}>
          {index + 1}. {question}
          <Image
            className={styles.faqArrow}
            src="/faq-arrow.png"
            alt="faq arrow"
            width={30}
            height={22}
            style={{
              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </h2>
        <p className={isActive ? styles.showAnswer : ''}>{answer}</p>
      </div>
    )
  })
  return (
    <div className={styles.page}>
      <Image
        className={styles.logo}
        src="/home-1.png"
        alt="logo Logo"
        width={844}
        height={244}
      />
      <div className={styles.headText}>
        <div className={styles.title}>Where Every Story Comes Alive! </div>
        <div className={styles.subTitle}>
          <div>
            Looking to <span>explore</span> a wide selection of curated{' '}
            <span>short films</span> and series?
          </div>
          <div>
            Or ready to showcase <span>your own creations</span>?{' '}
          </div>
          <div>
            Sign up for a Cineorb account today—<span>start free</span> or
            choose a plan that fits your needs and kick off your creative
            journey
          </div>
        </div>
      </div>
      <Link href="/signup" className={styles.signUp}>
        Sign Up
      </Link>
      {/* <div className={styles.home2}>
        <Image src="/home-3.png" alt="logo Logo" width={1200} height={577} />
      </div> */}
      <div className={styles.home2}>
        <div className={styles.home2Wrap}>
          <div>
            <div className={styles.title1}>TRENDING FILM</div>
            <div className={styles.leftImages}>
              {currentImages.slice(0, 6).map((image, index) => (
                <img
                  onClick={() =>
                    openModal({
                      title: '影片TRENDING' + index,
                      description: `这是影片TRENDING${index}的精彩描述`,
                      imageUrl:
                        'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
                    })
                  }
                  key={index}
                  className={styles.headIcon}
                  src={
                    'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
                  }
                  alt={`${image}`}
                />
              ))}
            </div>
          </div>
          <div className={styles.arrowWrap}>
            <Image
              className={styles.leftArrow}
              src={'/left-arrow.png'}
              alt={''}
              width={40}
              height={40}
              onClick={handlePrevClick}
            />
            <Image
              src={'/left-arrow.png'}
              alt={''}
              width={40}
              height={40}
              onClick={handleNextClick}
            />
          </div>
          <div>
            <div className={styles.title2}>TRENDING FILM FESTIVALS</div>
            <div className={styles.rightImages}>
              {currentImages.slice(6, 11).map((image, index) => (
                <img
                  onClick={() =>
                    openModal({
                      title: '影片' + index,
                      description: `这是影片 TRENDING FILM FESTIVALS${index}的精彩描述`,
                      imageUrl:
                        'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
                    })
                  }
                  key={index}
                  className={styles.headIcon}
                  src={
                    'https://fastly.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4'
                  }
                  alt={`${image}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* modal start */}
      {isModalOpen && currentModalData && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={closeModal}
          modalData={currentModalData}
        />
      )}
      {/* modal end */}
      <Image src="/home-4-logo.png" alt="logo Logo" width={60} height={68} />
      <div className={styles.home4Title}>What Makes Cineorb Unique</div>
      <div className={styles.home5Wrap}>
        <div className={styles.home5Item}>
          <Image src="/home-5-1.png" alt="logo Logo" width={60} height={60} />
          <div className={styles.home5ItemTitle}>Online Film Festival</div>
          <div className={styles.home5ItemText}>
            Convenience: Participate anytime, anywhere, without the need for
            travel. Online Interaction: Vote for your favorite films and
            participate in online polls. Festival Atmosphere: Enjoy high-quality
            screenings and the rich experience of a film festival right at home.
          </div>
        </div>
        <div className={styles.home5Item}>
          <Image src="/home-5-2.png" alt="logo Logo" width={60} height={60} />
          <div className={styles.home5ItemTitle}>Online Film Festival</div>
          <div className={styles.home5ItemText}>
            Convenience: Participate anytime, anywhere, without the need for
            travel. Online Interaction: Vote for your favorite films and
            participate in online polls. Festival Atmosphere: Enjoy high-quality
            screenings and the rich experience of a film festival right at home.
          </div>
        </div>
        <div className={styles.home5Item}>
          <Image src="/home-5-3.png" alt="logo Logo" width={60} height={60} />
          <div className={styles.home5ItemTitle}>Online Film Festival</div>
          <div className={styles.home5ItemText}>
            Convenience: Participate anytime, anywhere, without the need for
            travel. Online Interaction: Vote for your favorite films and
            participate in online polls. Festival Atmosphere: Enjoy high-quality
            screenings and the rich experience of a film festival right at home.
          </div>
        </div>
        <div className={styles.home5Item}>
          <Image src="/home-5-4.png" alt="logo Logo" width={54} height={60} />
          <div className={styles.home5ItemTitle}>Online Film Festival</div>
          <div className={styles.home5ItemText}>
            Convenience: Participate anytime, anywhere, without the need for
            travel. Online Interaction: Vote for your favorite films and
            participate in online polls. Festival Atmosphere: Enjoy high-quality
            screenings and the rich experience of a film festival right at home.
          </div>
        </div>
        <div className={styles.home5Item}>
          <Image src="/home-5-5.png" alt="logo Logo" width={60} height={60} />
          <div className={styles.home5ItemTitle}>Online Film Festival</div>
          <div className={styles.home5ItemText}>
            Convenience: Participate anytime, anywhere, without the need for
            travel. Online Interaction: Vote for your favorite films and
            participate in online polls. Festival Atmosphere: Enjoy high-quality
            screenings and the rich experience of a film festival right at home.
          </div>
        </div>
      </div>
      <div className={styles.faqWrap}>
        <h1 className={styles.faqTitle}>FAQ</h1>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            toggleAnswer={toggleAnswer}
          />
        ))}
      </div>
    </div>
  )
}
