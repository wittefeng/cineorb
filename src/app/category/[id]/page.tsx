import CategoryBiz from '@/components/biz/CategoryBiz/page'

import { getDetailData } from '@/services/apiService'
import React from 'react'

interface categoryParams {
  id: string
}
const Category = async ({ params }: { params: categoryParams }) => {
  const { id } = await params
  if (id) {
    try {
      // console.log('category id', id)
      const response = await getDetailData(id)
      // console.log('category response', response.data.video_list)
      if (response.code === 200) {
        return <CategoryBiz dataLibrary={response.data} />
      } else {
        return <div>id:{id} not found</div>
      }
    } catch (error) {
      console.error('Failed to get video data:', error)
      return <div>Failed to load video data</div>
    }
  }
  return <div>page not found</div>
}

export default Category
