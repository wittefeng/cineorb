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
      <a style={aStyle} href="/" target={'_blank'}>
        首页
      </a>
      <a style={aStyle} href="/home" target={'_blank'}>
        登录后的页面
      </a>
      <a style={aStyle} href="/card" target={'_blank'}>
        card
      </a>
      <a style={aStyle} href="/company" target={'_blank'}>
        company
      </a>
      <a style={aStyle} href="/contact" target={'_blank'}>
        contact
      </a>
      <a style={aStyle} href="/detail" target={'_blank'}>
        detail
      </a>
      <a style={aStyle} href="/library" target={'_blank'}>
        library
      </a>
      <a style={aStyle} href="/member" target={'_blank'}>
        member
      </a>
      <a style={aStyle} href="/mylibrary" target={'_blank'}>
        my library
      </a>
      <a style={aStyle} href="/paycode" target={'_blank'}>
        pay code
      </a>
      <a style={aStyle} href="/payment" target={'_blank'}>
        payment
      </a>
      <a style={aStyle} href="/payplan" target={'_blank'}>
        pay plan
      </a>
      <a style={aStyle} href="/privacy" target={'_blank'}>
        privacy
      </a>
      <a style={aStyle} href="/purchase" target={'_blank'}>
        purchase
      </a>
      <a style={aStyle} href="/setting" target={'_blank'}>
        setting
      </a>
      <a style={aStyle} href="/signin" target={'_blank'}>
        signin
      </a>
      <a style={aStyle} href="/signup" target={'_blank'}>
        signup
      </a>
      <a style={aStyle} href="/user" target={'_blank'}>
        user
      </a>
      <a style={aStyle} href="/video" target={'_blank'}>
        video
      </a>
    </div>
  )
}

export default Pages
