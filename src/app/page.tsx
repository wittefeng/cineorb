'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // 用来跟踪当前展开的 FAQ 项目

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)) // 切换当前展开的 FAQ 项目
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
      <div className={styles.bgWrap}>
        {/* <Image
          src="/background-1.jpg"
          alt="logo Logo"
          width={1920}
          height={980}
        />
        <Image
          src="/background-2.jpg"
          alt="logo Logo"
          width={1920}
          height={1466}
        />
        <Image
          src="/background-3.png"
          alt="logo Logo"
          width={1920}
          height={960}
        /> */}
      </div>
      <Image src="/home-1.png" alt="logo Logo" width={844} height={283} />
      <Image src="/home-2.png" alt="logo Logo" width={1235} height={274} />
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.home2}>
        <Image src="/home-3.png" alt="logo Logo" width={1200} height={577} />
      </div>
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
