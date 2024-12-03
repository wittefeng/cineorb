import { useState, useEffect } from 'react'

const usePageWidthListener = (): number => {
  const [pageWidth, setPageWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setPageWidth(window.innerWidth)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return pageWidth
}

export default usePageWidthListener
