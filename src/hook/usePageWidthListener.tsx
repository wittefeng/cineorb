import { useState, useEffect } from 'react'

// 定义自定义Hook，用于监听页面宽度变化
const usePageWidthListener = (): number => {
  // 使用useState来管理页面宽度的状态，初始值为当前窗口宽度
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    // 定义处理窗口大小变化的函数
    const handleResize = () => {
      // 获取最新的窗口宽度并更新状态
      setPageWidth(window.innerWidth)
    }

    // 添加窗口大小变化（resize）事件的监听器
    window.addEventListener('resize', handleResize)

    // 返回一个清理函数，用于在组件卸载时移除监听器，避免内存泄漏
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // 返回当前的页面宽度值，供使用该Hook的组件使用
  return pageWidth
}

export default usePageWidthListener
