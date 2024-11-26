import Link from 'next/link'
import React from 'react'

const Pages = () => {
  const divStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px'
  }
  const aStyle = {
    padding: '5px 20px',
    display: 'block',
    color: 'blue',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
  return (
    <div style={divStyle}>
      <Link style={aStyle} href="/" target={'_blank'}>
        首页
      </Link>
      <Link style={aStyle} href="/home" target={'_blank'}>
        登录后的页面
      </Link>
      <Link style={aStyle} href="/card" target={'_blank'}>
        card
      </Link>
      <Link style={aStyle} href="/company" target={'_blank'}>
        company
      </Link>
      <Link style={aStyle} href="/contact" target={'_blank'}>
        contact
      </Link>
      <Link style={aStyle} href="/detail" target={'_blank'}>
        detail
      </Link>
      <Link style={aStyle} href="/library" target={'_blank'}>
        library
      </Link>
      <Link style={aStyle} href="/member" target={'_blank'}>
        member
      </Link>
      <Link style={aStyle} href="/mylibrary" target={'_blank'}>
        my library
      </Link>
      <Link style={aStyle} href="/paycode" target={'_blank'}>
        pay code
      </Link>
      <Link style={aStyle} href="/payment" target={'_blank'}>
        payment
      </Link>
      <Link style={aStyle} href="/payplan" target={'_blank'}>
        pay plan
      </Link>
      <Link style={aStyle} href="/privacy" target={'_blank'}>
        privacy
      </Link>
      <Link style={aStyle} href="/purchase" target={'_blank'}>
        purchase
      </Link>
      <Link style={aStyle} href="/setting" target={'_blank'}>
        setting
      </Link>
      <Link style={aStyle} href="/signin" target={'_blank'}>
        signin
      </Link>
      <Link style={aStyle} href="/signup" target={'_blank'}>
        signup
      </Link>
      <Link style={aStyle} href="/user" target={'_blank'}>
        user
      </Link>
      <Link style={aStyle} href="/video" target={'_blank'}>
        video
      </Link>
    </div>
  )
}

export default Pages
