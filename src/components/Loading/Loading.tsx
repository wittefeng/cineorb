import React from 'react'

// 定义 Loading 组件
const Loading: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}
      >
        <div
          style={{
            border: '16px solid #f3f3f3',
            borderTop: '16px solid #3498db',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            animation: 'spin 2s linear infinite'
          }}
        ></div>
        <style>
          {`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}
        </style>
      </div>
    </>
  )
}

export default Loading
