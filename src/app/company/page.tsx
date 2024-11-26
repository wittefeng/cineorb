import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
const Company = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrap}>
        <Image
          src="/logo.png"
          alt="logo Logo"
          width={80}
          height={80}
          priority
        />
        <Image
          src="/wecom-temp.png"
          alt="logo Logo"
          width={102}
          height={25}
          priority
        />
      </div>
      <div className={styles.title}>Company Information</div>
      <div className={styles.message}>
        <p>About Us:</p>
        <p>
          CINEORB is a Silicon Valley-based online microfilm platform that
          partners with major global film festivals to showcase works by
          independent creators. Users can enjoy festival selections and original
          content. The platform aims to be the largest microfilm streaming
          service, akin to an "Online Oscars," leveraging its strategic Silicon
          Valley location for technological connectivity and rapid innovation.
        </p>
      </div>
      <div className={styles.message}>
        <br />
        <p>
          We're here to support you! For quick assistance, feel free to reach
          out to our customer support team anytime at contact@cineorb.com.
        </p>
      </div>
      <div className={styles.message}>
        <p>Office Location</p>
        <p>Cineorb, Inc.</p>
        <p>123 Creative Lane</p>
        <p>San Francisco, CA 94103, USA</p>
      </div>
    </div>
  )
}

export default Company
